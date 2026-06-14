const express = require("express")

const router = express.Router()

const {
  register,
  login
} = require("../services/authService")

router.post("/register", async (req, res) => {

  try {

    const result =
      await register(req.body)

    res.json(result)

  } catch (err) {

    res.status(400).json({
      error: err.message
    })

  }

})

router.post("/login", async (req, res) => {

  try {

    const result =
      await login(req.body)

    res.json(result)

  } catch (err) {

    res.status(400).json({
      error: err.message
    })

  }

})

module.exports = router