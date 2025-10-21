import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const dbUri = `${process.env.MONGO_URL}/${DB_NAME}`;
    const connection = await mongoose.connect(dbUri);

    console.log(`\n✅ MONGO DB CONNECTED! DB HOST: ${connection.connection.host}`);
  } catch (error) {
    console.error("❌ MONGO DB CONNECTION FAILED:", error);
    process.exit(1);
  }
};

export default connectDB;
