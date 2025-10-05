const WebSocket = require("ws");

const wsServer = new WebSocket.Server({ noServer: true });
const clients = new Map();

wsServer.on("connection", (ws, req) => {
  console.log("🔌 WebSocket client connected");

  let subscribedVideoId = null;

  ws.on("message", (msg) => {
    try {
      const data = JSON.parse(msg);

      if (data.type === 'subscribe' && data.videoId) {
        subscribedVideoId = data.videoId;

        if (!clients.has(subscribedVideoId)) {
          clients.set(subscribedVideoId, new Set());
        }
        clients.get(subscribedVideoId).add(ws);

        console.log(`Client subscribed to video ${subscribedVideoId}`);
        console.log(`Total clients for ${subscribedVideoId}: ${clients.get(subscribedVideoId).size}`);

        // Send confirmation
        ws.send(JSON.stringify({
          type: 'subscribed',
          videoId: subscribedVideoId,
          message: 'Successfully subscribed to updates'
        }));
      }

      if (data.type === 'unsubscribe') {
        if (subscribedVideoId && clients.has(subscribedVideoId)) {
          clients.get(subscribedVideoId).delete(ws);
          console.log(`Client unsubscribed from video ${subscribedVideoId}`);
          subscribedVideoId = null;
        }
      }

      if (data.type === 'ping') {
        ws.send(JSON.stringify({ type: 'pong' }));
      }

    } catch (err) {
      console.error("Invalid WebSocket message:", err.message);
    }
  });

  ws.on("close", () => {
    if (subscribedVideoId && clients.has(subscribedVideoId)) {
      clients.get(subscribedVideoId).delete(ws);

      if (clients.get(subscribedVideoId).size === 0) {
        clients.delete(subscribedVideoId);
      }

      console.log(`Client disconnected from video ${subscribedVideoId}`);
    } else {
      console.log("WebSocket client disconnected");
    }
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error.message);
  });

  // Send initial connection success
  ws.send(JSON.stringify({
    type: 'connected',
    message: 'WebSocket connection established'
  }));
});

function broadcastToClients(videoId, message) {
  if (!clients.has(videoId)) {
    console.log(`ℹNo clients subscribed to video ${videoId}`);
    return;
  }

  const messageStr = JSON.stringify(message);
  const videoClients = clients.get(videoId);
  let successCount = 0;

  videoClients.forEach(ws => {
    if (ws.readyState === WebSocket.OPEN) {
      try {
        ws.send(messageStr);
        successCount++;
      } catch (err) {
        console.error('Failed to send to client:', err.message);
      }
    }
  });

  console.log(`Broadcasted to ${successCount}/${videoClients.size} clients for video ${videoId}`);
}

function getClientCount(videoId) {
  return clients.has(videoId) ? clients.get(videoId).size : 0;
}

module.exports = { wsServer, broadcastToClients, getClientCount };