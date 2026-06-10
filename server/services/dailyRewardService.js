const User = require("../models/User");

async function claimDailyReward(userId) {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const now = new Date();

  if (user.lastDailyClaim && now - user.lastDailyClaim < 24 * 60 * 60 * 1000) {
    throw new Error("Daily reward already claimed");
  }

  user.coins += 100;

  user.lastDailyClaim = now;

  await user.save();

  return {
    coins: user.coins,
    reward: 100,
  };
}

module.exports = {
  claimDailyReward,
};
