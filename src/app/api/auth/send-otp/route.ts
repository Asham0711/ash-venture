import connectDB from "@/lib/database";
import User from "@/models/user.model";
import otpGenerator from 'otp-generator';
import { NextRequest, NextResponse } from "next/server";
import OTP from "@/models/otp.model";

export async function POST(request: NextRequest){
    await connectDB();
    try {
        const { email } = await request.json();
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

        const otp = otpGenerator.generate(4, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });

        const otpBody = await OTP.create({
            email, 
            otp, 
            context: "signup"
        });

        console.log("OTP Body", otpBody);

        return NextResponse.json(
            {
                success:true,
                otp,
                message:"OTP sent successfully"
            },
            {status: 200}
        )
        
    } catch (error) {
        console.log("Error while sending otp --> ", error);
        return NextResponse.json(
            {
                success:false,
                message:"Error while sending otp"
            },
            {status:500}
        )
    }
}