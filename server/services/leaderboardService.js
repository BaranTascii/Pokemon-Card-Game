const User = require("../models/User");

async function getTopPlayers() {
  return await User.find()
    .sort({ score: -1 })
    .limit(10)
    .select("username score");
}

module.exports = { getTopPlayers };
