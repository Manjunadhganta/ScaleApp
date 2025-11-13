import bcrypt from "bcrypt";
import mongoose from "mongoose";
import UserModel from "../models/Users.js";
import 'dotenv/config';

const saltRounds = 10;

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.atlas_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  await connectDB();

  const { name, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await UserModel.create({ name, email, password: hashedPassword });

    res.json({ message: "Success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}
