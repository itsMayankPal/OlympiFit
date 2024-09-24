const express = require("express");
const connectDB = require("./Config/database"); // Adjust the path if needed
const userRoutes = require("./Routes/userRoutes"); // Import your user routes

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use the user routes
app.use("/api/users", userRoutes); // Base URL for user routes

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
