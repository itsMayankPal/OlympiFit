const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // For environment variables

// Routes imports
const userRoutes = require("./Routes/userRoutes");
const challengesRoute = require("./Routes/ChallengeRoutes");

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB using the environment variable
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error: ", err));

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing

// API Routes
app.use("/api/users", userRoutes); // User-related routes
app.use("/api/challenges", challengesRoute); // Challenge-related routes

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
