import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string(),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().length(10, {message:'Phone number must be of 10 digits'}),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });