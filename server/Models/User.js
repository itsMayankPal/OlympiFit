const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  fitnessGoals: String,
  points: Number,
  badges: [String],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
