function unlock(user, achievement) {
  if (!user.achievements.includes(achievement)) {
    user.achievements.push(achievement);
  }
}

function checkAchievements(user, cards) {
  unlock(user, "FIRST_PACK");

  if (cards.some((c) => c.rarity === "rare")) {
    unlock(user, "FIRST_RARE");
  }

  if (cards.some((c) => c.rarity === "epic")) {
    unlock(user, "FIRST_EPIC");
  }

  if (cards.some((c) => c.rarity === "legendary")) {
    unlock(user, "FIRST_LEGENDARY");
  }

  if (cards.some((c) => c.shiny)) {
    unlock(user, "FIRST_SHINY");
  }

  if (user.packsOpened >= 10) {
    unlock(user, "TEN_PACKS");
  }

  if (user.packsOpened >= 100) {
    unlock(user, "HUNDRED_PACKS");
  }
}

module.exports = {
  checkAchievements,
};
