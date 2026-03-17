function getRarity() {
  const roll = Math.random();

  if (roll < 0.6) return "common";
  if (roll < 0.9) return "rare";
  if (roll < 0.99) return "epic";

  return "legendary";
}

module.exports = { getRarity };
