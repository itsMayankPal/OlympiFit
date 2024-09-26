const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
require("dotenv").config(); // To load environment variables from .env

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Connect to MongoDB using environment variable
const mongoURI = process.env.MONGO_URI; // Using the environment variable

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
