const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  targetWeight: {
    type: Number,
    required: true,
  },
  targetMonths: {
    type: Number,
    required: true,
  },
  challengesJoined: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Challenge",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
