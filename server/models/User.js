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

  email: {
  type: String,
  unique: true,
  required: true
},

password: {
  type: String,
  required: true
},

achievements: {
  type: [String],
  default: []
},

packsOpened: {
  type: Number,
  default: 0
}

  cards: [],
});
