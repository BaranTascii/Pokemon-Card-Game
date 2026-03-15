const express = require("express");

const router = express.Router();

const { openPack } = require("../services/packService.js");

router.get("/open", async (requestAnimationFrame, res) => {
  const cards = await openPack();
  res.json(cards);
});

module.exports = router;
