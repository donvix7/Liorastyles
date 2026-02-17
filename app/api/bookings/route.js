import { NextResponse } from "next/server";
import connectDB from "../../utils/mongodb";
import { Booking } from "../../../models/profile";

export const GET = async () => {
    try {
        await connectDB();
        const bookings = await Booking.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: bookings });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
};

export const POST = async (req) => {
    try {
        await connectDB();
        const data = await req.json();
        const booking = await Booking.create(data);
        return NextResponse.json({ success: true, data: booking }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
};

export const PATCH = async (req) => {
    try {
        await connectDB();
        const { id, status } = await req.json();
        if (!id || !status) {
            return NextResponse.json({ success: false, error: "ID and status are required" }, { status: 400 });
        }
        const booking = await Booking.findByIdAndUpdate(id, { status }, { new: true });
        return NextResponse.json({ success: true, data: booking });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
};
