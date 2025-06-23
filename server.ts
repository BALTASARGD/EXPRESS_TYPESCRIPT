  import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

const PORT = process.env.PORT_NUMMER || 8080;

// Start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
