import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/app/utils/mongodb";
import { Profile } from "@/models/profile";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const cookieStore = await cookies();
        if (!cookieStore.get("liora_session")) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        await connectDB();
        const { id, currentPassword, newPassword } = await req.json();

        if (!id || !currentPassword || !newPassword) {
            return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
        }

        const profile = await Profile.findById(id);
        if (!profile) {
            return NextResponse.json({ success: false, error: "Profile not found" }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(currentPassword, profile.password);
        if (!isMatch) {
            return NextResponse.json({ success: false, error: "Incorrect current password" }, { status: 401 });
        }

        const salt = await bcrypt.genSalt(10);
        profile.password = await bcrypt.hash(newPassword, salt);
        await profile.save();

        return NextResponse.json({ success: true, message: "Password updated successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
