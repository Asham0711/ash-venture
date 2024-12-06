/* eslint-disable @typescript-eslint/no-unused-vars */
import connectDB from "@/lib/database";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { AuthOptions } from "../../auth/[...nextauth]/options";
import mongoose from "mongoose";
import User from "@/models/user.model";

export async function GET(request: NextRequest){
    await connectDB();
    const session = await getServerSession(AuthOptions);
    const _user = session?.user;

    if (!session || !_user) {
        return NextResponse.json(
            { success: false, message: 'Not authenticated' },
            { status: 401 }
        );
    }
    const userId = new mongoose.Types.ObjectId(_user._id);
    try {
        const user = await User.findById(userId);
        if(!user){
            return NextResponse.json(
                { success: false, message: 'User not found' },
                { status: 404 }
            );
        };

        return NextResponse.json(
            {success:true, message:'User fetched successfully', user},
            {status: 200}
        )
    } catch (error) {
        console.log("Error while fetching profile --> ", error);
        return NextResponse.json(
            {
                success:false,
                message:"Error while fetching profile"
            },
            {status:500}
        )
    }
}