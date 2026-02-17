import connectDB from "@/app/utils/mongodb";
import { Service } from "@/models/profile";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        const services = await Service.find({}).sort({ createdAt: 1 });
        return NextResponse.json({ success: true, data: services });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
};

export const POST = async (req) => {
    try {
        await connectDB();
        const data = await req.json();
        
        let service;
        if (data._id) {
            // Update existing service
            service = await Service.findByIdAndUpdate(data._id, data, { new: true, runValidators: true });
        } else {
            // Create new service
            service = await Service.create(data);
        }

        return NextResponse.json({ success: true, data: service }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
};

export const DELETE = async (req) => {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        
        if (!id) {
            return NextResponse.json({ success: false, error: "Service ID is required" }, { status: 400 });
        }

        await Service.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Service deleted successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
};
