import connectDB from "@/app/utils/mongodb";
import { Content, Promotion, Profile } from "@/models/profile";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        await connectDB();
        const contents = await Content.find({}).sort({ createdAt: -1 });
        const promotions = await Promotion.find({}).sort({ createdAt: -1 });
        
        return NextResponse.json({ 
            success: true, 
            data: { contents, promotions } 
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
};

export const POST = async (req) => {
    try {
        await connectDB();
        const { type, ...data } = await req.json();

        let newItem;
        if (type === 'content') {
            newItem = await Content.create(data);
        } else if (type === 'promotion') {
            newItem = await Promotion.create(data);
        } else {
            return NextResponse.json({ success: false, error: "Invalid type" }, { status: 400 });
        }

        return NextResponse.json({ success: true, data: newItem }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
};
