
import { generateRandomCode } from "@/constants";
import Code from "@/lib/models/codeSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }

    try {
        const newCode = generateRandomCode();
        await Code.create({ codeStr: newCode });

        return NextResponse.json({ code: newCode }, { status: 200 });
    } catch (err) {
        console.log("Error in creating code", err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}