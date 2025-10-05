-- CreateTable
CREATE TABLE "public"."User" (
    "userId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "channelId" VARCHAR(100) NOT NULL,
    "channelName" VARCHAR(255),
    "channelThumbnailUrl" TEXT,
    "subscriberCount" INTEGER NOT NULL DEFAULT 0,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "tokenExpiresAt" TIMESTAMP(6),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "public"."Video" (
    "videoId" VARCHAR(50) NOT NULL,
    "userId" UUID NOT NULL,
    "title" VARCHAR(500) NOT NULL,
    "description" TEXT,
    "thumbnailUrl" TEXT,
    "publishedAt" TIMESTAMP(6),
    "analysisStatus" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("videoId")
);

-- CreateTable
CREATE TABLE "public"."Comment" (
    "commentId" VARCHAR(100) NOT NULL,
    "videoId" VARCHAR(50) NOT NULL,
    "userId" UUID NOT NULL,
    "authorName" VARCHAR(255),
    "authorChannelId" VARCHAR(100),
    "commentText" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(6),
    "parentCommentId" VARCHAR(100),
    "isReply" BOOLEAN NOT NULL DEFAULT false,
    "replyCount" INTEGER NOT NULL DEFAULT 0,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("commentId")
);

-- CreateTable
CREATE TABLE "public"."McpConversation" (
    "conversationId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "videoId" VARCHAR(50) NOT NULL,
    "userId" UUID NOT NULL,
    "userQuery" TEXT NOT NULL,
    "aiResponse" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "McpConversation_pkey" PRIMARY KEY ("conversationId")
);

-- CreateTable
CREATE TABLE "public"."CommentReply" (
    "replyId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "commentId" VARCHAR(100) NOT NULL,
    "userId" UUID NOT NULL,
    "replyText" TEXT NOT NULL,
    "replyStatus" VARCHAR(20) NOT NULL DEFAULT 'draft',
    "youtubeReplyId" VARCHAR(100),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postedAt" TIMESTAMP(3),

    CONSTRAINT "CommentReply_pkey" PRIMARY KEY ("replyId")
);

-- CreateTable
CREATE TABLE "public"."AnalysisJob" (
    "jobId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "videoId" VARCHAR(50) NOT NULL,
    "userId" UUID NOT NULL,
    "jobStatus" VARCHAR(20) NOT NULL DEFAULT 'queued',
    "commentsFetched" INTEGER NOT NULL DEFAULT 0,
    "commentsAnalyzed" INTEGER NOT NULL DEFAULT 0,
    "currentBatch" INTEGER NOT NULL DEFAULT 0,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalysisJob_pkey" PRIMARY KEY ("jobId")
);

-- CreateTable
CREATE TABLE "public"."SentimentAnalysis" (
    "analysisId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "commentId" VARCHAR(100) NOT NULL,
    "userId" UUID NOT NULL,
    "videoId" VARCHAR(50) NOT NULL,
    "sentiment" VARCHAR(20) NOT NULL,
    "sentimentScore" DOUBLE PRECISION,
    "isControversial" BOOLEAN NOT NULL DEFAULT false,
    "isHilarious" BOOLEAN NOT NULL DEFAULT false,
    "isQuestion" BOOLEAN NOT NULL DEFAULT false,
    "isAnswer" BOOLEAN NOT NULL DEFAULT false,
    "isSuggestion" BOOLEAN NOT NULL DEFAULT false,
    "analyzedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "replyCount" INTEGER NOT NULL DEFAULT 0,
    "likeCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SentimentAnalysis_pkey" PRIMARY KEY ("analysisId")
);

-- CreateTable
CREATE TABLE "public"."VideoAnalysisSummary" (
    "summaryId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "videoId" VARCHAR(50) NOT NULL,
    "userId" UUID NOT NULL,
    "totalComments" INTEGER NOT NULL DEFAULT 0,
    "positiveCount" INTEGER NOT NULL DEFAULT 0,
    "negativeCount" INTEGER NOT NULL DEFAULT 0,
    "neutralCount" INTEGER NOT NULL DEFAULT 0,
    "controversialCount" INTEGER NOT NULL DEFAULT 0,
    "hilariousCount" INTEGER NOT NULL DEFAULT 0,
    "questionCount" INTEGER NOT NULL DEFAULT 0,
    "answerCount" INTEGER NOT NULL DEFAULT 0,
    "suggestionCount" INTEGER NOT NULL DEFAULT 0,
    "summaryText" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoAnalysisSummary_pkey" PRIMARY KEY ("summaryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_channelId_key" ON "public"."User"("channelId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_username_idx" ON "public"."User"("username");

-- CreateIndex
CREATE INDEX "User_channelId_idx" ON "public"."User"("channelId");

-- CreateIndex
CREATE INDEX "Video_userId_idx" ON "public"."Video"("userId");

-- CreateIndex
CREATE INDEX "Video_analysisStatus_idx" ON "public"."Video"("analysisStatus");

-- CreateIndex
CREATE INDEX "Video_createdAt_idx" ON "public"."Video"("createdAt");

-- CreateIndex
CREATE INDEX "Comment_videoId_idx" ON "public"."Comment"("videoId");

-- CreateIndex
CREATE INDEX "Comment_parentCommentId_idx" ON "public"."Comment"("parentCommentId");

-- CreateIndex
CREATE INDEX "Comment_publishedAt_idx" ON "public"."Comment"("publishedAt");

-- CreateIndex
CREATE INDEX "McpConversation_videoId_idx" ON "public"."McpConversation"("videoId");

-- CreateIndex
CREATE INDEX "McpConversation_userId_idx" ON "public"."McpConversation"("userId");

-- CreateIndex
CREATE INDEX "CommentReply_commentId_idx" ON "public"."CommentReply"("commentId");

-- CreateIndex
CREATE INDEX "CommentReply_userId_idx" ON "public"."CommentReply"("userId");

-- CreateIndex
CREATE INDEX "CommentReply_replyStatus_idx" ON "public"."CommentReply"("replyStatus");

-- CreateIndex
CREATE INDEX "AnalysisJob_videoId_idx" ON "public"."AnalysisJob"("videoId");

-- CreateIndex
CREATE INDEX "AnalysisJob_userId_idx" ON "public"."AnalysisJob"("userId");

-- CreateIndex
CREATE INDEX "AnalysisJob_jobStatus_idx" ON "public"."AnalysisJob"("jobStatus");

-- CreateIndex
CREATE INDEX "AnalysisJob_createdAt_idx" ON "public"."AnalysisJob"("createdAt");

-- CreateIndex
CREATE INDEX "SentimentAnalysis_commentId_idx" ON "public"."SentimentAnalysis"("commentId");

-- CreateIndex
CREATE INDEX "SentimentAnalysis_videoId_idx" ON "public"."SentimentAnalysis"("videoId");

-- CreateIndex
CREATE INDEX "SentimentAnalysis_sentiment_idx" ON "public"."SentimentAnalysis"("sentiment");

-- CreateIndex
CREATE INDEX "SentimentAnalysis_sentimentScore_idx" ON "public"."SentimentAnalysis"("sentimentScore");

-- CreateIndex
CREATE INDEX "SentimentAnalysis_userId_idx" ON "public"."SentimentAnalysis"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoAnalysisSummary_videoId_key" ON "public"."VideoAnalysisSummary"("videoId");

-- CreateIndex
CREATE INDEX "VideoAnalysisSummary_videoId_idx" ON "public"."VideoAnalysisSummary"("videoId");

-- CreateIndex
CREATE INDEX "VideoAnalysisSummary_userId_idx" ON "public"."VideoAnalysisSummary"("userId");

-- AddForeignKey
ALTER TABLE "public"."Video" ADD CONSTRAINT "Video_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."Video"("videoId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES "public"."Comment"("commentId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."McpConversation" ADD CONSTRAINT "McpConversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."McpConversation" ADD CONSTRAINT "McpConversation_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."Video"("videoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CommentReply" ADD CONSTRAINT "CommentReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CommentReply" ADD CONSTRAINT "CommentReply_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "public"."Comment"("commentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnalysisJob" ADD CONSTRAINT "AnalysisJob_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."Video"("videoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnalysisJob" ADD CONSTRAINT "AnalysisJob_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SentimentAnalysis" ADD CONSTRAINT "SentimentAnalysis_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "public"."Comment"("commentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SentimentAnalysis" ADD CONSTRAINT "SentimentAnalysis_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."Video"("videoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SentimentAnalysis" ADD CONSTRAINT "SentimentAnalysis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VideoAnalysisSummary" ADD CONSTRAINT "VideoAnalysisSummary_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "public"."Video"("videoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VideoAnalysisSummary" ADD CONSTRAINT "VideoAnalysisSummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
