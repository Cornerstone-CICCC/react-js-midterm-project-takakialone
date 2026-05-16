import mongoose from "mongoose";
import { env } from "./env";

export async function connectDB() {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log(`\r\nMongoDB successfully connected: ${mongoose.connection.name}`);
  } catch (e) {
    console.error("Failed to connect MongoDB", e);
    process.exit(1);
  }
}
