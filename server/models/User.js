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

  lastDailyClaim: {
    type: Date,
    default: null,
  },

  cards: [],
});
