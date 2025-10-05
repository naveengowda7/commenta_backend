require('dotenv').config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use("/auth", authRoutes);

app.get("/", (req, res) => res.json({ status: "Auth Service Running" }));
app.get("/health", (req, res) => res.json({ healthy: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Auth service running on port ${PORT}`));
