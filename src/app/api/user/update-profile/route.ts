import connectDB from "@/lib/database";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { AuthOptions } from "../../auth/[...nextauth]/options";
import mongoose from "mongoose";
import User from "@/models/user.model";

export async function PUT(request: NextRequest) {
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
        const {name, phone} = await request.json();

        const user = await User.findById(userId);
        if(!user){
            return NextResponse.json(
                { success: false, message: 'User not found' },
                { status: 404 }
            );
        };

        if(name){
            user.name = name;
        }
        if(phone){
            user.phone = phone;
        }

        await user.save();

        return NextResponse.json(
            {success:true, message: 'Profile updated successfully'},
            {status:200}
        )
    } catch (error) {
        console.log("Error while updating profile --> ", error);
        return NextResponse.json(
            {
                success:false,
                message:"Error while updating profile"
            },
            {status:500}
        )
    }
}