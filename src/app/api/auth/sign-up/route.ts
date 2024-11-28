import connectDB from "@/lib/database";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import OTP from "@/models/otp.model";

export async function POST(request: NextRequest){
    connectDB();
    try {
        const { name, email, password, confirmPassword, otp } = await request.json();

        const existingUser = await User.findOne({email});
        if(existingUser){
            return NextResponse.json(
                {
                    success:false,
                    message:"User Already exist"
                },
                {status: 401}
            )
        }

        if( password !== confirmPassword){
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

        const hashedPassword =  await bcrypt.hash(password, 10);
        const encodedName = encodeURI(name);
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            profilePicture: `https://api.dicebear.com/5.x/initials/svg?seed=${encodedName}`
        });

        return NextResponse.json(
            {
                success:true,
                user,
                message:"User created successfully"
            },
            {status: 200}
        )

    } catch (error) {
        console.log("Error while creating user --> ", error);
        return Response.json(
            {
                success:false,
                message:"Error while signing up"
            },
            {status:500}
        )
    }
}