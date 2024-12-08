import { ApiResponse } from '@/types/apiResponse';
import nodemailer from 'nodemailer';

export async function sendVerificationEmail( email:string, title:string, body: string ) : Promise<ApiResponse> {
    try {

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            },
            secure:true,
        });

        const mailOptions = {
            from: `"AshVenture | Md Asham Imad" <${process.env.MAIL_USER}>`, // sender address
            to: email,
            subject: title,
            html: body
        }

        const mailresponse = await transporter.sendMail(mailOptions);
        console.log(mailresponse.response);

        return{
            success:true,
            message:"Email sent successfully"
        };

    } catch (emailError) {
        
        console.log("Error while sending mail --> ", emailError);
        return{
            success:false,
            message:"Error while sending mail"
        };
    }
}