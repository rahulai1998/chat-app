import mongoose from "mongoose";

// Connect DB
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URL}/chat-app`);
  } catch (error) {
    console.error(error);
  }
};
