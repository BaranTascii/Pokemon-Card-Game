const axios = require("axios");
const User = require("../models/User");
const { calculateScore } = require("./scoreService");
const { getRarity } = require("./rarityService");
const { isShiny } = require("./shinyService");
const { getCoinReward } = require("./rewardService");
const { checkAchievements } = require("./achievementService");
const PACK_TYPES = require("../config/packTypes");

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

const gainedScore = calculateScore(cards);

user.score += gainedScore;

async function openPack(userId, packType) {
  const user = await User.findById(userId);

  const pack = PACK_TYPES[packType];

  if (!pack) {
    throw new Error("Invalid pack");
  }

  if (!user) throw new Error("User not found");

  if (user.coins < pack.price) {
    throw new Error("Not enough coins");
  }

  user.coins -= pack.price;

  user.coins -= 50;

  if (pack.guaranteedLegendary) {
    cards[9].rarity = "legendary";
  }

  if (pack.guaranteedShiny) {
    cards[9].shiny = true;
  }

  const cards = await Promise.all(
    Array.from({ length: 10 }, () => getRandomPokemon()),
  );

  let earnedCoins = 0;

  cards.forEach((card) => {
    const exists = user.cards.find(
      (c) => c.pokemonId === card.pokemonId && c.shiny === card.shiny,
    );

    if (exists) {
      const reward = getCoinReward(card.rarity);
      earnedCoins += reward;
    } else {
      user.cards.push(card);
    }
  });

  user.coins += earnedCoins;

  await user.save();

  return {
    cards,
    coins: user.coins,
    earnedCoins,
  };

  user.packsOpened += 1;

  checkAchievements(user, cards);
}

module.exports = { openPack };
