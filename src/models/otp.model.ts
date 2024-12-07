import { sendVerificationEmail } from "@/lib/mailer";
import { emailResetTemplate } from "@/mailTemplates/EmailReset";
import { passwordResetTemplate } from "@/mailTemplates/PasswordResetEmail";
import { signUpTemplate } from "@/mailTemplates/sendVerificationMail";
import mongoose, { Schema, Document } from "mongoose";

export interface IOTP extends Document{
    email: string;
    otp: string;
    context: 'reset' | 'signup' | 'email';
    createdAt: Date;
}

const OTPSchema : Schema<IOTP> = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  context: { type: String, enum:['reset', 'signup', 'email'], required: true },
  createdAt: { type: Date, default: Date.now, expires: 60 * 5 }
});

// Define a post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {
  const otpDoc = this as IOTP;

  if (otpDoc.isNew) {
    try {
      let emailTemplate
      let subject
      if(otpDoc.context === "reset"){
        emailTemplate = passwordResetTemplate({ otp: otpDoc.otp })
        subject = "Password Reset OTP"
      } else if(otpDoc.context === "signup"){
        emailTemplate = signUpTemplate({ otp: otpDoc.otp });
        subject = "SignUp Verification Email"
      }else{
        emailTemplate = emailResetTemplate({otp: otpDoc.otp})
        subject = "Email Reset OTP"
      }
      // Send email using mailer
      await sendVerificationEmail(otpDoc.email, subject, emailTemplate);
      console.log("Verification email sent successfully.");
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; // Ensure the save operation is aborted on failure
    }
  }

  next();
});


const OTP = mongoose.models.OTP || mongoose.model<IOTP>("OTP", OTPSchema);
export default OTP;