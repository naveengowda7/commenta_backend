const { chatWithAI } = require("../services/aiAgentService");
const axios = require('axios');

async function handleChat(req, res) {
  try {
    console.log("This is the request body", req.body);
    const { videoId, userQuery } = req.body;
    const userId = req.user.userId;
    console.log(videoId, userQuery);

    if (!videoId || !userQuery) {
      return res.status(400).json({ error: "videoId and userQuery required" });
    }

    console.log(`💬 Chat query for video ${videoId}: "${userQuery}"`);

    // Get video context from DB
    const context = await getVideoContext(videoId, userId);

    // Generate AI response using MCP tools
    const aiResponse = await chatWithAI(userQuery, context);

    // Save conversation to DB
    await axios.post(`${process.env.DB_OPS_URL}/mcp/conversation`, {
      videoId,
      userId,
      userQuery,
      aiResponse
    });

    res.json({
      query: userQuery,
      response: aiResponse,
      videoId,
      timestamp: new Date().toISOString()
    });

  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: "Failed to process chat", details: err.message });
  }
}

async function getChatHistory(req, res) {
  try {
    const { videoId } = req.params;
    const userId = req.user.userId;

    const response = await axios.get(`${process.env.DB_OPS_URL}/mcp/conversations/${videoId}`, {
      params: { userId }
    });

    res.json(response.data);

  } catch (err) {
    console.error('History fetch error:', err);
    res.status(500).json({ error: "Failed to get chat history" });
  }
}

async function getVideoContext(videoId, userId) {
  try {
    // Fetch video details
    const videoRes = await axios.get(`${process.env.DB_OPS_URL}/video/${videoId}`);
    const video = videoRes.data;

    // Fetch comments (sample)
    const commentsRes = await axios.get(`${process.env.DB_OPS_URL}/comments/video/${videoId}?limit=50`);
    const commentsData = commentsRes.data;

    // Fetch analysis
    let analysis = [];
    try {
      const analysisRes = await axios.get(`${process.env.DB_OPS_URL}/analysis/video/${videoId}`);
      analysis = analysisRes.data;
    } catch (err) {
      console.log('No analysis available yet');
    }
    let summary = null;
    try {
      const summaryRes = await axios.get(`${process.env.DB_OPS_URL}/analysis/summary/${videoId}`);
      summary = summaryRes.data;
    } catch (err) {
      console.log('No summary available yet');
    }

    return {
      video,
      videoId,
      comments: commentsData.comments || [],
      analysis,
      summary,
      totalComments: commentsData.total || 0
    };

  } catch (error) {
    console.error('Context fetch error:', error);
    throw error;
  }
}

module.exports = { handleChat, getChatHistory };
