const express = require("express");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/register", async (req, res) => {
  const {
    name,
    email,
    password,
    age,
    weight,
    gender,
    height,
    targetWeight,
    targetMonths,
  } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      age,
      weight,
      gender,
      height,
      targetWeight,
      targetMonths,
    });

    // Save the user
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
