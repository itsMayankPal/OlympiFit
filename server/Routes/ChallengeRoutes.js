const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Challenge = require("../Models/Challenge");
const User = require("../Models/User"); // Import User model

// Get all challenges
router.get("/", async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: "Error fetching challenges", error });
  }
});

// Get a single challenge by ID
router.get("/:id", async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.json(challenge);
  } catch (error) {
    res.status(500).json({ message: "Error fetching challenge", error });
  }
});

// Create a new challenge
router.post("/", async (req, res) => {
  const { title, description, startDate, endDate } = req.body;

  // Validate required fields
  if (!title || !description || !startDate || !endDate) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newChallenge = new Challenge({
    title,
    description,
    startDate,
    endDate,
    participants: [], // Ensure participants array is initialized
  });

  try {
    const savedChallenge = await newChallenge.save();
    res.status(201).json(savedChallenge);
  } catch (error) {
    res.status(400).json({ message: "Error creating challenge", error });
  }
});

// Update a challenge by ID
router.put("/:id", async (req, res) => {
  const { title, description, startDate, endDate } = req.body;

  try {
    const updatedChallenge = await Challenge.findByIdAndUpdate(
      req.params.id,
      { title, description, startDate, endDate },
      { new: true }
    );
    if (!updatedChallenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.json(updatedChallenge);
  } catch (error) {
    res.status(400).json({ message: "Error updating challenge", error });
  }
});

// Delete a challenge by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedChallenge = await Challenge.findByIdAndDelete(req.params.id);
    if (!deletedChallenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.json({ message: "Challenge deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting challenge", error });
  }
});

// Route to handle joining a challenge
router.post("/joinChallenge", async (req, res) => {
  const { userId } = req.body; // Extract userId from request body
  const { challengeId } = req.body;
  console.log(req.body);
  console.log(userId);
  console.log(challengeId);

  try {
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if user has already joined the challenge
    if (challenge.participants.includes(userId)) {
      return res
        .status(400)
        .json({ message: "User already joined this challenge" });
    }

    // Update challenge and user data
    challenge.participants.push(userId);
    await challenge.save();

    user.challengesJoined.push(challengeId); // Assuming challengesJoined is an array in User
    await user.save();

    res.json({ message: "Challenge joined successfully", challenge, user });
  } catch (error) {
    console.error("Error joining challenge:", error);
    res.status(500).json({ message: "Error joining challenge", error });
  }
});

// Route to handle cancelling a challenge
// Route to handle canceling a challenge
router.post("/cancelChallenge", async (req, res) => {
  const { userId, challengeId } = req.body;

  try {
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if user is part of the challenge
    if (!challenge.participants.includes(userId)) {
      return res
        .status(400)
        .json({ message: "User has not joined this challenge" });
    }

    // Remove user from challenge and update user challenges
    challenge.participants = challenge.participants.filter(
      (id) => id.toString() !== userId
    );
    await challenge.save();

    user.challengesJoined = user.challengesJoined.filter(
      (id) => id.toString() !== challengeId
    );
    await user.save();

    res.json({ message: "Challenge canceled successfully", challenge, user });
  } catch (error) {
    console.error("Error canceling challenge:", error);
    res.status(500).json({ message: "Error canceling challenge", error });
  }
});

module.exports = router;
