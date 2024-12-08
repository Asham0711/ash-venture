import {z} from 'zod';

export const passwordResetSchema = z.object({
    currentPassword: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    newPassword: z.string().min(8, { message: 'Password must be at least 8 characters long' })
})
.refine((data) => data.currentPassword !== data.newPassword, {
    message: 'Passwords must not be same',
    path: ['newPassword'],
})