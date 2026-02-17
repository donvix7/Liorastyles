import connectDB from "@/app/utils/mongodb";
import { Profile } from "@/models/profile";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const GET = async (req, { params }) => {
    try {
        const { id } = await params;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, error: "Invalid profile ID format" }, 
                { status: 400 }
            );
        }

        await connectDB();
        const userProfile = await Profile.findById(id);
        
        if (!userProfile) {
            return NextResponse.json(
                { success: false, error: "Profile not found" }, 
                { status: 404 }
            );
        }
        
        return NextResponse.json({ success: true, data: userProfile }, { status: 200 });
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error", message: error.message }, 
            { status: 500 }
        );
    }
};

export const PUT = async (req, { params }) => {
    try {
        const { id } = await params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, error: "Invalid profile ID format" }, 
                { status: 400 }
            );
        }

        const body = await req.json();
        const { name, email, achievements, bio, aboutMe, location, phone, avatarColor, socials, role } = body;

        await connectDB();
        const userProfile = await Profile.findByIdAndUpdate(
            id, 
            { name, email, achievements, bio, aboutMe, location, phone, avatarColor, socials, role }, 
            { new: true, runValidators: true }
        );

        if (!userProfile) {
            return NextResponse.json(
                { success: false, error: "Profile not found" }, 
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: userProfile }, { status: 200 });
    } catch (error) {
        console.error("Update error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to update profile", message: error.message },
            { status: 500 }
        );
    }
};