import connectDB from "@/lib/database";
import OTP from "@/models/otp.model";
import User from "@/models/user.model";
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    await connectDB();
    try {
        const { email, otp, newPassword, confirmNewPassword } = await request.json();
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json(
                {
                    success:false,
                    message:"User not found. Sign up first"
                },
                {status: 404}
            )
        }

        if(newPassword !== confirmNewPassword){
            return NextResponse.json(
                {
                    success:false,
                    message:"Password and Confirm Password fields are not maching"
                },
                {status: 401}
            )
        }

        const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
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

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const updatedUser = await User.findOneAndUpdate(
            {email},
            {password: hashedPassword},
            {new:true}
        )

        return NextResponse.json(
            {
                success:true,
                updatedUser,
                message:'Password updated successfully'
            },
            {status: 200}
        )
    } catch (error) {
        console.log("Error while updating password --> ", error);
        return Response.json(
            {
                success:false,
                message:"Error while updating password"
            },
            {status:500}
        )
    }
}