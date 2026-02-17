import mongoose from "mongoose";
import { Profile } from "./models/profile.js";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = "mongodb+srv://donvix7_db_user:xswmn42O2xrmZu37@cluster0.clig8aw.mongodb.net/?appName=Cluster0";

async function makeAdmin() {
    try {
        await mongoose.connect(MONGODB_URI);
        const result = await Profile.findByIdAndUpdate(
            "69709ceb0841a926ad18e444", 
            { role: "admin" }, 
            { new: true }
        );
        console.log("Admin role granted to:", result.name);
        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

makeAdmin();
