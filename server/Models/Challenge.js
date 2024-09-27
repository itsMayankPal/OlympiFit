const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: false,
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ], // Array of user IDs to track participants
  progress: {
    type: Number,
    default: 0,
  },
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;
