const express = require("express");
const prisma = require("../db/client");
const router = express.Router();

router.post("/conversation", async (req, res) => {
  try {
    const { videoId, userId, userQuery, aiResponse } = req.body;

    const conversation = await prisma.mcpConversation.create({
      data: { videoId, userId, userQuery, aiResponse }
    });

    res.json(conversation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save conversation" });
  }
});

router.get("/conversations/:videoId", async (req, res) => {
  try {
    const conversations = await prisma.mcpConversation.findMany({
      where: { videoId: req.params.videoId },
      orderBy: { createdAt: 'desc' }
    });

    res.json(conversations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch conversations" });
  }
});

module.exports = router;