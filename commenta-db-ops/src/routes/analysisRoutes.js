const express = require("express");
const prisma = require("../db/client");
const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const { videoId, userId, analyzed } = req.body;

    const result = await prisma.sentimentAnalysis.createMany({
      data: analyzed.map(a => ({
        commentId: a.commentId,
        userId,
        videoId,
        sentiment: a.sentiment,
        sentimentScore: a.sentimentScore,
        isControversial: a.isControversial || false,
        isHilarious: a.isHilarious || false,
        isQuestion: a.isQuestion || false,
        isAnswer: a.isAnswer || false,
        isSuggestion: a.isSuggestion || false
      })),
      skipDuplicates: true
    });

    res.json({ success: true, count: result.count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save analysis" });
  }
});

router.get("/video/:videoId", async (req, res) => {
  const videoId = req.params.videoId;
  try {
    const analysis = await prisma.sentimentAnalysis.findMany({
      where: { videoId },
      orderBy: { analyzedAt: "desc" },
      include: {
        comment: {
          select: {
            commentText: true,
            authorName: true,
            publishedAt: true,
            likeCount: true,
            replyCount: true
          }
        }
      }
    });

    const response = analysis.map(a => ({
      analysisId: a.analysisId,
      commentId: a.commentId,
      userId: a.userId,
      videoId: a.videoId,
      sentiment: a.sentiment,
      sentimentScore: a.sentimentScore,
      isControversial: a.isControversial,
      isHilarious: a.isHilarious,
      isQuestion: a.isQuestion,
      isAnswer: a.isAnswer,
      isSuggestion: a.isSuggestion,
      analyzedAt: a.analyzedAt,
      likeCount: a.comment.likeCount ?? 0,
      replyCount: a.comment?.replyCount ?? 0,
      commentText: a.comment?.commentText ?? "",
      authorName: a.comment?.authorName ?? "",
      publishedAt: a.comment?.publishedAt ?? null
    }));

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch analysis" });
  }
});

router.get("/summary/:videoId", async (req, res) => {
  try {
    const summary = await prisma.videoAnalysisSummary.findUnique({
      where: { videoId: req.params.videoId }
    });

    if (!summary) return res.status(404).json({ error: "Summary not found" });
    res.json(summary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch summary" });
  }
});

router.post("/summary", async (req, res) => {
  try {
    const { videoId, userId, ...summaryData } = req.body;

    const summary = await prisma.videoAnalysisSummary.upsert({
      where: { videoId },
      update: summaryData,
      create: { videoId, userId, ...summaryData }
    });

    res.json(summary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save summary" });
  }
});

router.post("/job", async (req, res) => {
  try {
    const { videoId, userId } = req.body;

    const job = await prisma.analysisJob.create({
      data: {
        videoId,
        userId,
        jobStatus: 'queued'
      }
    });

    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create job" });
  }
});

router.patch("/job/:jobId", async (req, res) => {
  try {
    const { jobStatus, commentsFetched, commentsAnalyzed, currentBatch } = req.body;

    const updates = { jobStatus };
    if (commentsFetched !== undefined) updates.commentsFetched = commentsFetched;
    if (commentsAnalyzed !== undefined) updates.commentsAnalyzed = commentsAnalyzed;
    if (currentBatch !== undefined) updates.currentBatch = currentBatch;
    if (jobStatus === 'processing' && !updates.startedAt) updates.startedAt = new Date();
    if (jobStatus === 'completed') updates.completedAt = new Date();

    const job = await prisma.analysisJob.update({
      where: { jobId: req.params.jobId },
      data: updates
    });

    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update job" });
  }
});

module.exports = router;
