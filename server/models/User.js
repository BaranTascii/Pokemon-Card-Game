const userSchema = new mongoose.Schema({
  username: String,

  coins: {
    type: Number,
    default: 100,
  },

  score: {
    type: Number,
    default: 0,
  },

  cards: [
    {
      pokemonId: Number,
      name: String,
      image: String,
      rarity: String,
      shiny: Boolean,
    },
  ],
});
