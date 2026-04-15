const express = require("express");
const router = express.Router();

const { openPack } = require("../services/packService");
const { getTopPlayers } = require("../services/leaderboardService");

router.post("/open", async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        error: "userId is required",
      });
    }

    // 🎴 Pack aç
    const result = await openPack(userId);

    // 🏆 Leaderboard güncelle
    const io = req.app.get("io");

    const updatedLeaderboard = await getTopPlayers();

    io.emit("leaderboard", updatedLeaderboard);

    res.json(result);
  } catch (err) {
    console.error("Pack error:", err.message);

    res.status(400).json({
      error: err.message,
    });
  }
});

module.exports = router;
