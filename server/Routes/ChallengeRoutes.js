const express = require("express");
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

  const newChallenge = new Challenge({
    title,
    description,
    startDate,
    endDate,
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
router.post("/join/:challengeId", async (req, res) => {
  const { userId } = req.body; // Extract userId from request body
  const { challengeId } = req.params;

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

    user.challengesJoined.push(challengeId);
    await user.save();

    res.json({ message: "Challenge joined successfully", challenge, user });
  } catch (error) {
    res.status(500).json({ message: "Error joining challenge", error });
  }
});
// Route to handle joining a challenge
router.post("/join/:challengeId", async (req, res) => {
  const { userId } = req.body; // Extract userId from request body
  const { challengeId } = req.params;

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

    user.challengesJoined.push(challengeId);
    await user.save();

    res.json({ message: "Challenge joined successfully", challenge, user });
  } catch (error) {
    console.error("Error joining challenge:", error);
    res.status(500).json({ message: "Error joining challenge" });
  }
});

router.put("/joinChallenge", async (req, res) => {
  const { userId, challengeId } = req.body;

  try {
    // Validate ObjectId
    if (
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(challengeId)
    ) {
      return res
        .status(400)
        .json({ message: "Invalid user ID or challenge ID." });
    }

    const user = await User.findById(userId);
    const challenge = await Challenge.findById(challengeId);

    if (!user || !challenge) {
      return res.status(404).json({ message: "User or Challenge not found." });
    }

    // Logic to join the challenge (add challenge to user's challenges)
    user.challenges.push(challengeId);
    await user.save();

    return res
      .status(200)
      .json({ message: "Successfully joined the challenge." });
  } catch (error) {
    console.error("Error updating challenge:", error);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later.", error });
  }
});

module.exports = router;
