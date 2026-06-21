const PACK_TYPES = {
  basic: {
    price: 100,
    guaranteedLegendary: false,
    guaranteedShiny: false,
  },

  premium: {
    price: 500,
    guaranteedLegendary: false,
    guaranteedShiny: false,
  },

  legend: {
    price: 1500,
    guaranteedLegendary: true,
    guaranteedShiny: false,
  },

  shiny: {
    price: 3000,
    guaranteedLegendary: false,
    guaranteedShiny: true,
  },
};

module.exports = PACK_TYPES;
