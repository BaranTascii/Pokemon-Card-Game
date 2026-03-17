const axios = require("axios");
const User = require("../models/User");

const { getRarity } = require("./rarityService");
const { isShiny } = require("./shinyService");
const { getCoinReward } = require("./rewardService");

async function getRandomPokemon() {
  const id = Math.floor(Math.random() * 151) + 1;

  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const rarity = getRarity();
  const shiny = isShiny();

  return {
    pokemonId: res.data.id,
    name: res.data.name,
    image: res.data.sprites.other["official-artwork"].front_default,
    rarity,
    shiny,
  };
}

async function openPack(userId) {
  const user = await User.findById(userId);

  if (!user) throw new Error("User not found");

  if (user.coins < 50) {
    throw new Error("Not enough coins");
  }

  user.coins -= 50;

  const cards = await Promise.all(
    Array.from({ length: 10 }, () => getRandomPokemon()),
  );

  let earnedCoins = 0;

  cards.forEach((card) => {
    const exists = user.collection.find(
      (c) => c.pokemonId === card.pokemonId && c.shiny === card.shiny,
    );

    if (exists) {
      const reward = getCoinReward(card.rarity);
      earnedCoins += reward;
    } else {
      user.collection.push(card);
    }
  });

  user.coins += earnedCoins;

  await user.save();

  return {
    cards,
    coins: user.coins,
    earnedCoins,
  };
}

module.exports = { openPack };
