const express = require("express");
const connectDB = require("./Config/database"); // Database connection
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes"); // Import your user routes

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Use middlewares
app.use(cors());
app.use(express.json());

// Set up routes
app.use("/api/users", userRoutes); // Base URL for user routes

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
