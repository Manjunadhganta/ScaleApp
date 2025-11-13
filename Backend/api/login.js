import bcrypt from "bcrypt";
import mongoose from "mongoose";
import UserModel from "../models/Users.js";
import 'dotenv/config';

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

  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.json({ message: "No record existed" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ message: "The password is incorrect" });

    res.json({ message: "Success", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}
