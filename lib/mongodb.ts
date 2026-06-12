import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export async function connectDB() {
    if (!uri) {
        throw new Error('Please define the uri environment variable');
    }
    await mongoose.connect(uri);
    return mongoose;
}