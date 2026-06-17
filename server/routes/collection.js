const express = require("express");

const router = express.Router();

const { getCollection } = require("../services/collectionService");

router.get("/:userId", async (req, res) => {
  try {
    const result = await getCollection(req.params.userId);

    res.json(result);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

module.exports = router;
