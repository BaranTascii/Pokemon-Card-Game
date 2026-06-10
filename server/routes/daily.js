const express = require("express");
const router = express.Router();

const { claimDailyReward } = require("../services/dailyRewardService");

router.post("/claim", async (req, res) => {
  try {
    const { userId } = req.body;

    const result = await claimDailyReward(userId);

    res.json(result);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

module.exports = router;
