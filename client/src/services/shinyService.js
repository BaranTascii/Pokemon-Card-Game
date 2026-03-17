function isShiny() {
  const chance = Math.random();

  return chance < 0.01;
}

module.exports = { isShiny };
