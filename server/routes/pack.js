const express = require("express");

const router = express.Router();

const { openPack } = require("../services/packService.js");

router.post("/open", async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await openPack(userId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
