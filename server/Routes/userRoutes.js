const express = require("express");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Register route
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
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user with plain text password
    const newUser = new User({
      name,
      email,
      password, // Save plain text password
      age,
      weight,
      gender,
      height,
      targetWeight,
      targetMonths,
    });

    // Save the new user to the database
    await newUser.save();

    // Log to confirm user was created successfully
    console.log("User created successfully");

    // Send success response
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
    console.error("Error during user registration:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Sign In Route
// Sign In Route
// Sign In Route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Log incoming email and password
    console.log("Incoming email:", email);
    console.log("Incoming password:", password);

    // Check if the user exists and explicitly include the password field
    const user = await User.findOne({ email }).select("+password");

    // Log the user object
    console.log("User found:", user);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Log the user password
    console.log("User password from database:", user.password); // Should not be undefined

    // Compare the plain password
    if (user.password !== password) {
      console.log("Password does not match.");
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
    console.error("Error during sign in:", error);
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
