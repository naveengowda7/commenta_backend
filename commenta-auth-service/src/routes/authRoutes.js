const express = require("express");
const { redirectToYoutube, oauthCallback, refreshToken, verifyToken } = require("../controllers/authController");

const router = express.Router();

router.get("/login", redirectToYoutube);
router.get("/callback", oauthCallback);
router.post("/refresh", refreshToken);
router.post("/verify", verifyToken);

module.exports = router;