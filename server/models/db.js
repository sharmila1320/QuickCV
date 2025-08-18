import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();   // This must be called before using process.env
console.log('MONGODB_URL:', process.env.MONGODB_URL);
async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000
    });
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
}

main();
