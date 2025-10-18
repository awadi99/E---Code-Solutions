import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURL = process.env.NODE_ENV === "production" 
  ? process.env.MONGO_URI_ATLAS 
  : process.env.MONGO_URI_LOCAL;

async function connectDB() {
  try {
    await mongoose.connect(mongoURL); // no need for deprecated options
    console.log("MongoDB connection successful");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process if connection fails
  }
}

export default connectDB;
