import connectDB from "@/lib/database"
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"
import { AuthOptions } from "../../auth/[...nextauth]/options";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
    await connectDB();
    const session = await getServerSession(AuthOptions);
    const _user = session?.user;

    if (!session || !_user) {
        return NextResponse.json(
            { success: false, message: 'Not authenticated' },
            { status: 401 }
        );
    }
    const userId = new mongoose.Types.ObjectId(_user._id)
}