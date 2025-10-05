const express = require("express");
const prisma = require("../db/client");
const router = express.Router();

router.post("/bulk", async (req, res) => {
  try {
    const { comments } = req.body;

    if (!Array.isArray(comments) || comments.length === 0) {
      return res.status(400).json({ error: "Invalid comments data" });
    }

    const result = await prisma.comment.createMany({
      data: comments,
      skipDuplicates: true
    });

    res.json({ success: true, count: result.count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to insert comments" });
  }
});

router.get("/video/:videoId", async (req, res) => {
  try {
    const { page = 1, limit = 100 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [comments, total] = await Promise.all([
      prisma.comment.findMany({
        where: { videoId: req.params.videoId },
        include: {
          sentimentAnalysis: true,
          replies: true
        },
        orderBy: { publishedAt: 'desc' },
        skip,
        take: parseInt(limit)
      }),
      prisma.comment.count({ where: { videoId: req.params.videoId } })
    ]);

    res.json({ comments, total, page: parseInt(page), limit: parseInt(limit) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

router.get("/:commentId", async (req, res) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: { commentId: req.params.commentId },
      include: {
        sentimentAnalysis: true,
        replies: true,
        commentReplies: true
      }
    });
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    res.json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch comment" });
  }
});

router.post("/reply", async (req, res) => {
  try {
    const { commentId, userId, replyText, youtubeReplyId, replyStatus } = req.body;

    const reply = await prisma.commentReply.create({
      data: {
        commentId,
        userId,
        replyText,
        youtubeReplyId,
        replyStatus: replyStatus || 'draft',
        postedAt: replyStatus === 'posted' ? new Date() : null
      }
    });

    res.json(reply);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save reply" });
  }
});

// GET top liked comments for a video
router.get("/video/:videoId/top-likes", async (req, res) => {
  try {
    console.log("TOP LIKES ROUTE HIT", req.params.videoId);
    const { limit = 10 } = req.query;

    const topLiked = await prisma.comment.findMany({
      where: { videoId: req.params.videoId },
      orderBy: { likeCount: 'desc' },
      take: parseInt(limit),
      include: {
        sentimentAnalysis: true,
        replies: true
      }
    });


    res.json({ videoId: req.params.videoId, topLiked });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch top liked comments" });
  }
});

// GET top replied comments for a video
router.get("/video/:videoId/top-replies", async (req, res) => {
  try {
    const { limit = 10 } = req.query;

    const topReplied = await prisma.comment.findMany({
      where: { videoId: req.params.videoId },
      orderBy: { replyCount: 'desc' },
      take: parseInt(limit),
      include: {
        sentimentAnalysis: true,
        replies: true
      }
    });

    res.json({ videoId: req.params.videoId, topReplied });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch top replied comments" });
  }
});


module.exports = router;