import connectDB from "@/lib/database";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { AuthOptions } from "../../auth/[...nextauth]/options";
import mongoose from "mongoose";
import User from "@/models/user.model";
import OTP from "@/models/otp.model";

export async function PUT(request: NextRequest){
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
        const { otp, newEmail } = await request.json();

        const user = await User.findById(userId);
        if(!user){
            return NextResponse.json(
                { success: false, message: 'User not found' },
                { status: 404 }
            );
        };

        const existingUser = await User.findOne({ email: newEmail });
        if(existingUser){
            return NextResponse.json(
                {success: false, message: 'This email is already registered with different profile'},
                {status: 400}
            )
        }

        if(user.email === newEmail){
            return NextResponse.json(
                {success: false, message: 'New email cannot be same as previous one'},
                {status: 400}
            )
        }

        const response = await OTP.find({ email: user.email }).sort({ createdAt: -1 }).limit(1);
        console.log(response);
        if (response.length === 0) {
            // OTP not found for the email
            return NextResponse.json(
                {
                    success: false,
                    message: "The OTP is not valid",
                },
                {status: 400}
            );
        } else if (otp !== response[0].otp) {
            // Invalid OTP
            return NextResponse.json(
                {
                    success: false,
                    message: "The OTP is not valid",
                },
                {status: 400}
            );
        }

        await OTP.findByIdAndDelete(response[0]._id);

        user.email = newEmail;
        await user.save();

        return NextResponse.json(
            {success: true, message:'Email updated successfully'},
            {status: 200}
        )
    } catch (error) {
        console.log("Error while updating email --> ", error);
        return NextResponse.json(
            {
                success:false,
                message:"Error while updating email"
            },
            {status:500}
        )
    }
}