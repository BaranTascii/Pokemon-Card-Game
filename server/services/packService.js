const axios = require("axios");

const { getRarity } = require("./rarityService.js");
const { isShiny } = require("./shinyService.js");

async function getRandomPokemon() {
  const id = Math.floor(Math.random() * 151) + 1;
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const rarity = getRarity();
  const shiny = isShiny();

  return {
    id: res.data.id,
    name: res.data.name,
    image: res.data.sprites.other["official-artwork"].front_default,
    rarity,
    shiny,
  };
}

async function openPack() {
  const promises = [];
  for (let i = 0; i < 10; i++) {
    promises.push(getRandomPokemon());
  }
  return await Promise.all(promises);
}

module.exports = { openPack };
