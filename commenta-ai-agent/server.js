require("dotenv").config();
const express = require("express");
const cors = require("cors");
const chatRoutes = require("./src/routes/chatRoutes");

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.get("/", (req, res) => res.json({ status: "AI Agent Service Running" }));
app.get("/health", (req, res) => res.json({ healthy: true }));

app.use("/chat", chatRoutes);

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
  console.log(`✅ AI Agent Service running on port ${PORT}`);
});