require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const fetchRoutes = require("./src/routes/fetchRoutes");
const { wsServer, broadcastToClients } = require("./src/wsServer");

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use("/fetch", fetchRoutes);

app.get("/", (req, res) => res.json({ status: "Comment Fetcher Service Running" }));
app.get("/health", (req, res) => res.json({ healthy: true }));

app.listen(process.env.PORT || 4001, () => {
  console.log(`Comment Fetcher running on port ${process.env.PORT}`)
})

const server = http.createServer(app);
server.on("upgrade", (req, socket, head) => {
  wsServer.handleUpgrade(req, socket, head, (ws) => {
    wsServer.emit("connection", ws, req);
  });
});

