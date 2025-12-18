import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO || "mongodb://localhost:27017/");
    console.log("Database Connected!");
  } catch (error) {
    console.error("Database Connection Failed!", error);
  }
};

export default connectDB;
