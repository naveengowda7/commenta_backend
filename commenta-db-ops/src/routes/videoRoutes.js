const express = require("express");
const prisma = require("../db/client");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { videoId, userId, title, description, thumbnailUrl, publishedAt } = req.body;

    const video = await prisma.video.upsert({
      where: { videoId },
      update: { title, description, thumbnailUrl, updatedAt: new Date() },
      create: { videoId, userId, title, description, thumbnailUrl, publishedAt }
    });

    res.json(video);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create video" });
  }
});

router.get("/:videoId", async (req, res) => {
  try {
    const video = await prisma.video.findUnique({
      where: { videoId: req.params.videoId },
      include: {
        user: { select: { username: true, channelName: true, email: true } },
        videoSummaries: true
      }
    });
    if (!video) return res.status(404).json({ error: "Video not found" });
    res.json(video);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch video" });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const videos = await prisma.video.findMany({
      where: { userId: req.params.userId },
      orderBy: { createdAt: 'desc' },
      include: { videoSummaries: true }
    });
    res.json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});

router.patch("/:videoId/status", async (req, res) => {
  try {
    const { analysisStatus } = req.body;
    const video = await prisma.video.update({
      where: { videoId: req.params.videoId },
      data: { analysisStatus, updatedAt: new Date() }
    });
    res.json(video);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update video status" });
  }
});

module.exports = router;