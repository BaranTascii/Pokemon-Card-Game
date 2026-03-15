const axios = require("axios");

async function getRandomPokemon() {
  const id = Math.floor(Math.random() * 151) + 1;

  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return {
    id: res.data.id,
    name: res.data.name,
    image: res.data.sprites.other["official-artwork"].front_default,
  };
}

async function openPack() {
  const cards = [];

  for (let i = 0; i < 10; i++) {
    const pokemon = await getRandomPokemon();
    cards.push(pokemon);
  }
  return cards;
}

module.exports = {
  openPack,
};
