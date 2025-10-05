const axios = require("axios");
const { Queue } = require("bullmq");
const { redisConnection } = require("../config/redis");
const { broadcastToClients } = require("../wsServer");

const fetchQueue = new Queue("comments-fetch-queue", { connection: redisConnection });


async function refreshAccessToken(userId) {
  try {
    console.log(`🔄 Refreshing access token for user ${userId}`);

    // Get user from DB
    const userRes = await axios.get(`${process.env.DB_OPS_URL}/user/${userId}`);
    const user = userRes.data;

    if (!user.refreshToken) {
      throw new Error('No refresh token available');
    }

    // Refresh via auth service
    const tokenRes = await axios.post(`${process.env.AUTH_SERVICE_URL}/auth/refresh`, {
      refreshToken: user.refreshToken,
      userId: user.userId
    });

    console.log('Access token refreshed');
    return tokenRes.data.accessToken;
  } catch (error) {
    console.error('Token refresh error:', error.message);
    throw error;
  }
}

async function getVideoDetails(videoId, accessToken) {
  try {
    console.log(`Fetching video details for ${videoId}`);

    const { data } = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
      params: {
        part: "snippet,statistics",
        id: videoId
      },
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!data.items || data.items.length === 0) {
      throw new Error('Video not found');
    }

    const video = data.items[0];
    return {
      videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnailUrl: video.snippet.thumbnails.default.url,
      publishedAt: video.snippet.publishedAt
    };
  } catch (error) {
    console.error('Video details error:', error.message);
    throw error;
  }
}

async function startCommentFetch(videoId, userId) {
  try {
    console.log(`Starting comment fetch for video ${videoId}`);

    const accessToken = await refreshAccessToken(userId);

    const videoDetails = await getVideoDetails(videoId, accessToken);
    await axios.post(`${process.env.DB_OPS_URL}/video/create`, {
      ...videoDetails,
      userId
    });
    console.log(`Video details saved: ${videoDetails.title}`);

    const jobRes = await axios.post(`${process.env.DB_OPS_URL}/analysis/job`, {
      videoId,
      userId
    });

    const jobId = jobRes.data.jobId;
    console.log(`Analysis job created: ${jobId}`);

    await axios.patch(`${process.env.DB_OPS_URL}/video/${videoId}/status`, {
      analysisStatus: 'fetching'
    });

    broadcastToClients(videoId, {
      type: 'fetch_started',
      videoId,
      status: 'fetching',
      progress: 0,
      message: 'Starting to fetch comments...'
    });

    let pageToken = null;
    let totalFetched = 0;
    let batchNumber = 0;

    do {
      console.log(`Fetching batch ${batchNumber + 1}...`);

      const res = await axios.get("https://www.googleapis.com/youtube/v3/commentThreads", {
        params: {
          part: "snippet,replies",
          videoId,
          maxResults: 100,
          pageToken,
          textFormat: 'plainText'
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const items = res.data.items || [];

      if (items.length === 0) {
        console.log('ℹNo more comments to fetch');
        break;
      }

      totalFetched += items.length;
      batchNumber++;

      const commentsBatch = [];

      items.forEach((item) => {
        const topComment = item.snippet.topLevelComment.snippet;

        // Add top-level comment
        commentsBatch.push({
          commentId: item.id,
          videoId,
          userId,
          authorName: topComment.authorDisplayName,
          authorChannelId: topComment.authorChannelId?.value || null,
          commentText: topComment.textDisplay,
          publishedAt: new Date(topComment.publishedAt),
          isReply: false,
          likeCount: topComment.likeCount || 0,
          replyCount: item.snippet.totalReplyCount || 0
        });
        // if (item.replies) {
        //   item.replies.comments.forEach(reply => {
        //     const replySnippet = reply.snippet;
        //     commentsBatch.push({
        //       commentId: reply.id,
        //       videoId,
        //       userId,
        //       authorName: replySnippet.authorDisplayName,
        //       authorChannelId: replySnippet.authorChannelId?.value || null,
        //       commentText: replySnippet.textDisplay,
        //       publishedAt: new Date(replySnippet.publishedAt),
        //       parentCommentId: item.id,
        //       isReply: true
        //     });
        //   });
        // }
      });

      console.log(`Parsed ${commentsBatch.length} comments (including replies)`);

      // Save comments to DB
      try {
        await axios.post(`${process.env.DB_OPS_URL}/comments/bulk`, {
          comments: commentsBatch
        });
        console.log(`Saved batch ${batchNumber} to database`);
      } catch (dbError) {
        console.error('DB save error (continuing):', dbError.message);
      }

      // Queue for analysis
      await fetchQueue.add("commentsBatch", {
        videoId,
        userId,
        comments: commentsBatch,
        batchNumber,
        jobId
      });
      console.log(`Queued batch ${batchNumber} for analysis`);

      try {
        await axios.patch(`${process.env.DB_OPS_URL}/analysis/job/${jobId}`, {
          commentsFetched: totalFetched,
          currentBatch: batchNumber,
          jobStatus: 'processing'
        });
      } catch (jobError) {
        console.error('Job update error (continuing):', jobError.message);
      }

      broadcastToClients(videoId, {
        type: 'fetch_progress',
        videoId,
        commentsFetched: totalFetched,
        batchNumber,
        message: `Fetched ${totalFetched} comments so far...`
      });

      pageToken = res.data.nextPageToken;

      await new Promise(resolve => setTimeout(resolve, 100));

    } while (pageToken);

    console.log(`Finished fetching ${totalFetched} comments for video ${videoId}`);

    // Update video status
    await axios.patch(`${process.env.DB_OPS_URL}/video/${videoId}/status`, {
      analysisStatus: 'analyzing'
    });

    broadcastToClients(videoId, {
      type: 'fetch_completed',
      videoId,
      totalFetched,
      status: 'analyzing',
      message: `Fetched ${totalFetched} comments. Now analyzing...`
    });

    return { success: true, totalFetched };

  }

  catch (error) {
    console.error(`Fetch error for video ${videoId}:`, error.message);

    // Broadcast error
    broadcastToClients(videoId, {
      type: 'fetch_error',
      videoId,
      error: error.message,
      message: 'Failed to fetch comments'
    });
    try {
      await axios.patch(`${process.env.DB_OPS_URL}/video/${videoId}/status`, {
        analysisStatus: 'failed'
      });
    } catch (updateError) {
      console.error('Failed to update status:', updateError.message);
    }

    throw error;
  }
}

module.exports = { startCommentFetch, refreshAccessToken, getVideoDetails };
