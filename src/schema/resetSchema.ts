import {z} from 'zod';

export const resetSchema = z.object({
    otp: z.string().length(4, 'Verification code must be 4 digits'),
    newPassword: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords must match',
    path: ['confirmNewPassword'], // This sets the error to the confirmPassword field
});