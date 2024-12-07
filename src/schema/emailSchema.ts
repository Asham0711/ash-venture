import {z} from 'zod';

export const emailSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' })
})

export const profileSchema = z.object({
    name: z.string(),
    phone: z.string().length(10,'Phone number must be of 10 digit')
})