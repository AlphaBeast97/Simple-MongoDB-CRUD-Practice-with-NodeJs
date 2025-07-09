import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { productsRouter } from "./routes/products.route.js";

const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check if PORT and MONGO_DB_URI are defined
const PORT = process.env.PORT;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

// Set up the products router
app.use("/api/products", productsRouter);

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the Product API");
});

const startServer = async () => {
  if (!MONGO_DB_URI) {
    console.error("Error: MONGO_DB_URI is not defined in the .env file.");
    process.exit(1);
  }

  try {
    // Connect to MongoDB - no deprecated options needed
    await mongoose.connect(MONGO_DB_URI);
    console.log("Connected to MongoDB!");

    // Start the server only after a successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

startServer();
