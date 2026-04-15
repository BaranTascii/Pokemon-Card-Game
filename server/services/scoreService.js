function calculateScore(cards) {
  let score = 0;

  cards.forEach((card) => {
    switch (card.rarity) {
      case "common":
        score += 1;
        break;

      case "rare":
        score += 5;
        break;

      case "epic":
        score += 20;
        break;

      case "legendary":
        score += 100;
        break;
    }

    if (card.shiny) {
      score += 50;
    }
  });

  return score;
}

module.exports = { calculateScore };
