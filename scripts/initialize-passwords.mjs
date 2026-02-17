import mongoose from "mongoose";
import { Profile } from "../models/profile.js";
import bcrypt from "bcryptjs";

const MONGODB_URI = "mongodb+srv://donvix7_db_user:xswmn42O2xrmZu37@cluster0.clig8aw.mongodb.net/?appName=Cluster0";

async function initializePasswords() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("0000", salt);

        const result = await Profile.updateMany(
            { $or: [{ password: { $exists: false } }, { password: "" }, { password: null }] },
            { $set: { password: hashedPassword } }
        );

        console.log(`Updated ${result.modifiedCount} profiles with default password.`);
        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

initializePasswords();
