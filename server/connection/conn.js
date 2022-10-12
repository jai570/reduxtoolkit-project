import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log(`mongodb connected`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
