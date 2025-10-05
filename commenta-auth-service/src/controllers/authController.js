const { Queue } = require("bullmq");
const { redisConnection } = require("../config/redis");
const { getTokens, getYoutubeChannelInfo, getAuthUrl, refreshAccessToken } = require("../services/youtubeOAuthService");
const { generateToken, verifyToken: verifyJWT } = require("../utils/jwt");
const axios = require('axios');

const userQueue = new Queue("db-ops-user", { connection: redisConnection });

const redirectToYoutube = (req, res) => {
  const url = getAuthUrl();
  console.log('🔗 Redirecting to YouTube OAuth');
  res.redirect(url);
};

const oauthCallback = async (req, res) => {
  try {
    const { code, error } = req.query;

    if (error) {
      console.error('OAuth error from Google:', error);
      return res.redirect(`${process.env.FRONTEND_URL}/auth/error?error=${error}`);
    }

    if (!code) {
      return res.redirect(`${process.env.FRONTEND_URL}/auth/error?error=no_code`);
    }

    console.log('🔄 Exchanging code for tokens...');
    const tokens = await getTokens(code);

    console.log('📧 Fetching user email...');
    const userInfoRes = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` }
    });
    const email = userInfoRes.data.email;

    let channelInfo = null;
    try {
      console.log('📺 Attempting to fetch YouTube channel info...');
      channelInfo = await getYoutubeChannelInfo(tokens.access_token);
      console.log('YouTube channel found');
    } catch (e) {
      console.warn(" No YouTube channel found, proceeding with email only.");
    }

    let userData;

    if (channelInfo) {
      userData = {
        username: channelInfo.snippet.title,
        email: email || null,
        channelId: channelInfo.id,
        channelName: channelInfo.snippet.title,
        channelThumbnailUrl: channelInfo.snippet.thumbnails.default.url,
        subscriberCount: parseInt(channelInfo.statistics.subscriberCount) || 0,
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
        tokenExpiresAt: new Date(Date.now() + tokens.expires_in * 1000),
      };
    } else {
      userData = {
        username: email?.split('@')[0] || 'Unknown',
        email: email || null,
        channelId: null,
        channelName: null,
        channelThumbnailUrl: null,
        subscriberCount: 0,
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
        tokenExpiresAt: new Date(Date.now() + tokens.expires_in * 1000),
      };
      console.log('User allowed to login without YouTube channel');
    }

    console.log('Adding user to queue for fallback...');
    await userQueue.add('createUser', userData);

    // Check if user exists by email
    let dbUser = null;
    try {
      const resp = await axios.get(`${process.env.DB_OPS_URL}/user/byEmail/${email}`);
      dbUser = resp.data;
    } catch (err) {
      console.warn("User not found in DB, will create a new one.");
    }

    if (dbUser) {
      console.log('Updating existing user tokens/info...');
      await axios.patch(`${process.env.DB_OPS_URL}/user/${dbUser.userId}/tokens`, {
        accessToken: userData.accessToken,
        refreshToken: userData.refreshToken,
        tokenExpiresAt: userData.tokenExpiresAt,
        channelId: userData.channelId,
        channelName: userData.channelName,
        channelThumbnailUrl: userData.channelThumbnailUrl,
        username: userData.username,
        subscriberCount: userData.subscriberCount
      });
    } else {
      console.log('Creating new user in DB...');
      try {
        const createResp = await axios.post(`${process.env.DB_OPS_URL}/user/create`, userData);
        dbUser = createResp.data;
      } catch (dbError) {
        console.error('DB service error, fallback queue will handle it:', dbError.message);
        dbUser = { userId: userData.email }; // fallback for JWT
      }
    }

    // Generate JWT
    const jwtToken = generateToken({
      userId: dbUser.userId,
      channelId: userData.channelId
    });

    console.log('OAuth successful, redirecting to frontend');
    res.redirect(`${process.env.FRONTEND_URL}/auth/success?token=${jwtToken}`);

  } catch (err) {
    console.error('OAuth callback error:', err.message);
    res.redirect(`${process.env.FRONTEND_URL}/auth/error?error=auth_failed`);
  }
};

const refreshToken = async (req, res) => {
  try {
    const { refreshToken, userId } = req.body;

    if (!refreshToken) return res.status(400).json({ error: 'Refresh token required' });

    const newTokens = await refreshAccessToken(refreshToken);

    if (userId) {
      await axios.patch(`${process.env.DB_OPS_URL}/user/${userId}/tokens`, {
        accessToken: newTokens.access_token,
        tokenExpiresAt: new Date(Date.now() + newTokens.expires_in * 1000)
      });
    }

    res.json({
      accessToken: newTokens.access_token,
      expiresIn: newTokens.expires_in
    });

  } catch (err) {
    console.error('Token refresh error:', err);
    res.status(500).json({ error: 'Failed to refresh token' });
  }
};

const verifyToken = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = verifyJWT(token);
    res.json({ valid: true, userId: decoded.userId, channelId: decoded.channelId });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = {
  oauthCallback,
  redirectToYoutube,
  refreshToken,
  verifyToken
};