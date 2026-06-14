const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

async function register(data) {

  const exists = await User.findOne({
    email: data.email
  })

  if (exists) {
    throw new Error("Email already exists")
  }

  const hashedPassword =
    await bcrypt.hash(data.password, 10)

  const user = await User.create({

    username: data.username,

    email: data.email,

    password: hashedPassword

  })

  return user
}

async function login(data) {

  const user =
    await User.findOne({
      email: data.email
    })

  if (!user) {
    throw new Error("Invalid credentials")
  }

  const valid =
    await bcrypt.compare(
      data.password,
      user.password
    )

  if (!valid) {
    throw new Error("Invalid credentials")
  }

  const token = jwt.sign(
    {
      userId: user._id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  )

  return {
    token,
    user
  }
}

module.exports = {
  register,
  login
}