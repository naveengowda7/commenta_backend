require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userWorker = require("./src/workers/userWorker");
const analysisWorker = require("./src/workers/analysisWorker");

const userRoutes = require("./src/routes/userRoutes");
const videoRoutes = require("./src/routes/videoRoutes");
const commentRoutes = require("./src/routes/commentRoutes");
const analysisRoutes = require("./src/routes/analysisRoutes");
const mcpRoutes = require("./src/routes/mcpRoutes");

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));


app.get("/", (req, res) => res.json({ status: "DB Ops Service Running", uptime: process.uptime() }));
app.get("/health", (req, res) => res.json({ healthy: true }));

app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comments", commentRoutes);
app.use("/analysis", analysisRoutes);
app.use("/mcp", mcpRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`✅ DB Ops Service running on port ${PORT}`);
  console.log(`✅ Workers started: user, analysis`);
});

const gracefulShutdown = async () => {
  console.log("⚡ SIGTERM/SIGINT received, closing workers and server...");
  try {
    if (userWorker?.close) await userWorker.close();
    if (analysisWorker?.close) await analysisWorker.close();
    console.log("✅ Workers closed");
  } catch (err) {
    console.error("❌ Error closing workers:", err);
  } finally {
    server.close(() => {
      console.log("✅ Server closed");
      process.exit(0);
    });
  }
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);