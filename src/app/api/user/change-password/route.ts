import connectDB from "@/lib/database"
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"
import { AuthOptions } from "../../auth/[...nextauth]/options";
import mongoose from "mongoose";
import User from "@/models/user.model";
import bcrypt from 'bcryptjs';

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
    const userId = new mongoose.Types.ObjectId(_user._id);
    try {
        const { currentPassword, newPassword } = await request.json();
        const user = await User.findById(userId);
        if(!user){
            return NextResponse.json(
                { success: false, message: 'User not found' },
                { status: 404 }
            );
        };

        const isValidPassword = await bcrypt.compare(currentPassword,user.password);
        if(!isValidPassword){
            return NextResponse.json(
                {success:false, message:'Your current password is wrong'},
                {status: 400}
            );
        }

        if(currentPassword === newPassword){
            return NextResponse.json(
                {success:false, message:'YNew password cannot be the same as previous one'},
                {status: 400}
            );
        }

        const hashedPassword = await bcrypt.hash(newPassword,10);
        await User.findByIdAndUpdate(
            {userId},
            {password: hashedPassword},
            {new:true}
        )

        return NextResponse.json(
            {success:true, message:'Password Updated successfully'},
            {status: 200}
        )
    } catch (error) {
        console.log("Error while changing password --> ", error);
        return NextResponse.json(
            {
                success:false,
                message:"Error while changing password"
            },
            {status:500}
        )
    }
}