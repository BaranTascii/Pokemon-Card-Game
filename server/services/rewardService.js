function getCoinReward(rarity) {
  switch (rarity) {
    case "common":
      return 5;
    case "rare":
      return 20;
    case "epic":
      return 100;
    case "legendary":
      return 500;
    default:
      return 0;
  }
}

module.exports = { getCoinReward };
