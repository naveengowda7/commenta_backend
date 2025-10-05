const { Worker } = require('bullmq');
const { redisConnection } = require('../config/redis');
const prisma = require('../db/client');

const worker = new Worker(
  'db-ops-user',
  async (job) => {
    try {
      if (job.name === 'createUser') {
        const userData = job.data;
        console.log('📝 Creating/updating user:', userData.email);

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
          create: {
            channelId: userData.channelId,
            username: userData.username,
            email: userData.email,
            channelName: userData.channelName,
            channelThumbnailUrl: userData.channelThumbnailUrl,
            subscriberCount: userData.subscriberCount,
            accessToken: userData.accessToken,
            refreshToken: userData.refreshToken,
            tokenExpiresAt: userData.tokenExpiresAt
          }
        });

        console.log('User saved:', user.email);
        return user;
      }
    } catch (error) {
      console.error('User worker error:', error);
      throw error;
    }
  },
  { connection: redisConnection, concurrency: 5 }
);

worker.on('completed', (job) => console.log(`User job ${job.id} completed`));
worker.on('failed', (job, err) => console.error(`User job ${job.id} failed:`, err.message));

module.exports = worker;