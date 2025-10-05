const express = require("express");
const prisma = require("../db/client");
const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { userId: req.params.userId },
      include: {
        videos: { select: { videoId: true, title: true, analysisStatus: true } }
      }
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

router.get("/channel/:channelId", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { channelId: req.params.channelId }
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const userData = req.body;
    
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {
        username: userData.username,
        channelId: userData.channelId, 
        channelName: userData.channelName,
        channelThumbnailUrl: userData.channelThumbnailUrl,
        subscriberCount: userData.subscriberCount,
        accessToken: userData.accessToken,
        refreshToken: userData.refreshToken,
        tokenExpiresAt: userData.tokenExpiresAt,
        updatedAt: new Date()
      },
      create: userData
    });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

router.get("/byEmail/:email", async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
      include: {
        videos: {
          select: { videoId: true, title: true, analysisStatus: true }
        }
      }
    });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("Failed to fetch user by email");
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

router.patch("/:userId/tokens", async (req, res) => {
  try {
    const { 
      accessToken, 
      refreshToken, 
      tokenExpiresAt,
      channelId,           
      channelName,         
      channelThumbnailUrl, 
      username,            
      subscriberCount      
    } = req.body;
    
    const updateData = {
      accessToken,
      refreshToken,
      tokenExpiresAt,
      updatedAt: new Date()
    };

    if (channelId !== undefined) updateData.channelId = channelId;
    if (channelName !== undefined) updateData.channelName = channelName;
    if (channelThumbnailUrl !== undefined) updateData.channelThumbnailUrl = channelThumbnailUrl;
    if (username !== undefined) updateData.username = username;
    if (subscriberCount !== undefined) updateData.subscriberCount = subscriberCount;

    const user = await prisma.user.update({
      where: { userId: req.params.userId },
      data: updateData
    });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update tokens" });
  }
});

module.exports = router;