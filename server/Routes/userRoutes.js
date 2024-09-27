const express = require("express");
const User = require("../Models/User");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Register route
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
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password using Argon2
    const hashedPassword = await argon2.hash(password);

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

    await newUser.save();
    res.status(201).json({
      message: "User registered successfully",
      user: {
        name,
        email,
        age,
        weight,
        gender,
        height,
        targetWeight,
        targetMonths,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Sign In Route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Check if password is provided
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    // Compare password with the hashed password in the database using Argon2
    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate a token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Sign in successful",
      token,
      userId: user._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// User info retrieval by ID
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id)
      .populate("challengesJoined") // Populate challenges
      .select(
        "name email weight age gender height targetWeight targetMonths challengesJoined"
      ); // Select relevant fields
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user); // Respond with the complete user object
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// User info retrieval by email (optional, if needed)
router.get("/user/email/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email }).select(
      "name email weight age gender height targetWeight targetMonths"
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
