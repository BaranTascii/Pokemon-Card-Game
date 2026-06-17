const User = require("../models/User");

async function getCollection(userId) {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const uniquePokemon = [...new Set(user.cards.map((card) => card.pokemonId))];

  const totalPokemon = 1025;

  const completion = Math.floor((uniquePokemon.length / totalPokemon) * 100);

  const shinyCount = user.cards.filter((card) => card.shiny).length;

  return {
    totalPokemon,

    collected: uniquePokemon.length,

    completion,

    shinyCount,

    cards: user.cards,
  };
}

module.exports = {
  getCollection,
};
