const { Worker } = require('bullmq');
const { redisConnection } = require('../config/redis');
const prisma = require('../db/client');

const worker = new Worker(
  'analysis-results-queue',
  async (job) => {
    try {
      if (job.name === 'analysisBatch') {
        const { videoId, userId, analyzed } = job.data;
        console.log(`Saving ${analyzed.length} analyzed comments for video ${videoId}`);

        
        const commentIds = analyzed.map(a => a.commentId);

        const existingComments = await prisma.comment.findMany({
          where: { commentId: { in: commentIds } },
          select: { commentId: true }
        });

        const existingCommentIds = new Set(existingComments.map(c => c.commentId));
        const missingCommentIds = commentIds.filter(id => !existingCommentIds.has(id));

        if (missingCommentIds.length > 0) {
          console.warn(`Missing ${missingCommentIds.length} comments in DB. These sentiment records will be skipped.`);
          console.warn('Missing comment IDs:', missingCommentIds);
        }

        const validAnalyzed = analyzed.filter(a => existingCommentIds.has(a.commentId));

        if (validAnalyzed.length === 0) {
          console.warn(' No valid comments to analyze');
          return { success: false, count: 0, error: 'No valid comments found in database' };
        }

        await prisma.sentimentAnalysis.createMany({
          data: validAnalyzed.map(a => ({
            commentId: a.commentId,
            userId,
            videoId,
            sentiment: a.sentiment,
            sentimentScore: a.sentimentScore,
            isControversial: a.isControversial,
            isHilarious: a.isHilarious,
            isQuestion: a.isQuestion,
            isAnswer: a.isAnswer,
            isSuggestion: a.isSuggestion,
            likeCount: a.likeCount,
            replyCount: a.replyCount
          })),
          skipDuplicates: true
        });

        console.log(`Saved ${validAnalyzed.length}/${analyzed.length} analysis records for video ${videoId}`);
        return { success: true, count: validAnalyzed.length, skipped: analyzed.length - validAnalyzed.length };
      }

      if (job.name === 'updateSummary') {
        const { videoId, userId, summary, jobId } = job.data;
        console.log(`Updating summary for video ${videoId}`);
        const { updatedAt, ...summaryData } = summary;

        const result = await prisma.videoAnalysisSummary.upsert({
          where: { videoId },
          update: { ...summaryData, createdAt: new Date() },
          create: { videoId, userId, ...summaryData }
        });

        // Update video status
        await prisma.video.update({
          where: { videoId },
          data: { analysisStatus: 'completed', updatedAt: new Date() }
        });

        if (jobId) {
          await prisma.analysisJob.update({
            where: { jobId },
            data: {
              jobStatus: 'completed',
              completedAt: new Date()
            }
          });
        } else {
          const job = await prisma.analysisJob.findFirst({
            where: { videoId, jobStatus: { not: 'completed' } }
          });

          if (job) {
            await prisma.analysisJob.update({
              where: { jobId: job.jobId },
              data: {
                jobStatus: 'completed',
                completedAt: new Date()
              }
            });
          }
        }

        console.log(`Summary and job status updated for video ${videoId}`);
        return result;
      }
    } catch (error) {
      console.error('Analysis worker error:', error);
      throw error;
    }
  },
  { connection: redisConnection, concurrency: 3 }
);

worker.on('completed', (job) => console.log(`Analysis job ${job.id} completed`));
worker.on('failed', (job, err) => console.error(`Analysis job ${job.id} failed:`, err.message));

module.exports = worker;