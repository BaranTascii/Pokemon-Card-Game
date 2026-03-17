const mongoose = require("mongoose");
const User = require("./models/User");

async function createUser() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pokemon-game");

    const user = await User.create({
      username: "baran",
    });

    console.log("USER ID:", user._id);

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createUser();
