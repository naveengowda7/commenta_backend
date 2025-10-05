const express = require("express");
const { startCommentFetch } = require("../services/youtubeService");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { videoId } = req.body;
    const userId = req.user.userId;

    if (!videoId) {
      return res.status(400).json({ error: "videoId required" });
    }

    console.log(`Fetch request received for video ${videoId} by user ${userId}`);

    // Start fetching in background
    startCommentFetch(videoId, userId).catch(err => {
      console.error('Background fetch error:', err);
    });

    res.json({
      message: "Comment fetching started",
      videoId,
      status: "fetching",
      redirectUrl: `${process.env.FRONTEND_URL}/dashboard/${videoId}`
    });

  } catch (err) {
    console.error('Fetch endpoint error:', err);
    res.status(500).json({ error: "Failed to start comment fetch" });
  }
});

router.get("/status/:videoId", async (req, res) => {
  try {
    const axios = require('axios');
    const video = await axios.get(`${process.env.DB_OPS_URL}/video/${req.params.videoId}`);
    res.json({
      videoId: req.params.videoId,
      status: video.data.analysisStatus,
      title: video.data.title
    });
  } catch (err) {
    console.error('Status check error:', err);
    res.status(500).json({ error: "Failed to get status" });
  }
});

module.exports = router;