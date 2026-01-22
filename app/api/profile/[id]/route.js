import profile from "@/app/models/profile";
import connectDB from "@/app/utils/mongodb";
import Profile from "@/models/profile";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    // Extract id from params object (params is synchronous in App Router)
    const { id } = await params; // Remove await

    console.log(id)
    
    try {
        await connectDB(); // Connect to DB

        // Use a different variable name to avoid conflict with imported Profile
        const userProfile = await Profile.findById(id);
        
        // Check if profile exists
        if (!userProfile) {
            return NextResponse.json(
                { error: "Profile not found" }, 
                { status: 404 }
            );
        }
        
        return NextResponse.json(userProfile, { status: 200 });
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json(
            { error: "Failed to fetch profile", details: error.message }, 
            { status: 500 }
        );
    }
};

export const PUT = async (req, { params }) => {
    const { id } = await params;
    const { newName: name, nweEmail: email, newAchievements: achievements, newBio: bio  } = await req.json();
    try {
        await connectDB();
        const userProfile = await Profile.findByIdAndUpdate(id, { name, email, achievements, bio }, { new: true });
        return NextResponse.json(userProfile, { status: 200 });
    } catch (error) {
        console.error("Update error:", error);
        return NextResponse.json(
            { error: "Failed to update profile", details: error.message },
            { status: 500 }
        );
    }
};