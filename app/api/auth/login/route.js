import connectDB from "@/app/utils/mongodb";
import { Profile } from "@/models/profile";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
    try {
        await connectDB();
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ success: false, error: "Email and password are required" }, { status: 400 });
        }

        const user = await Profile.findOne({ email });
        
        if (!user) {
            return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
        }

        // Return user data (excluding password)
        const userData = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };

        // Set session cookie
        const cookieStore = await cookies();
        cookieStore.set("liora_session", JSON.stringify(userData), {
            httpOnly: false, // Set to false so react-cookie can read it
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });

        return NextResponse.json({ success: true, data: userData });
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
};
