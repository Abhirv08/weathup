
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {

    let client;

    try {
        client = await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }

    const data = await req.json();
    const codeToCheck = data.codeStr;

    try {
        const CodeModel = mongoose.model('Code');

        const existingCode = await CodeModel.findOne({ codeStr: codeToCheck });

        if (existingCode) {
            const { used, createdAt } = existingCode;

            const currentTime = new Date();
            const timeDifferenceInSeconds = Math.floor((currentTime - createdAt) / 1000);

            if (timeDifferenceInSeconds > 60) {
                return NextResponse.json({ error: "The code has expired" }, { status: 400 });
            }

            if (used) {
                return NextResponse.json({ error: "This code has already been used" }, { status: 400 });
            }

            await CodeModel.updateOne({ _id: existingCode._id }, { used: true });
            return NextResponse.json({ message: "Code is correct", existingCode }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Enter a valid code" }, { status: 400 });
        }
    } catch (err) {
        console.log("Error in finding Code", err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}