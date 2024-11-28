import { z } from 'zod';

export const verifySchema = z.object({
  otp: z.string().length(4, 'Verification code must be 4 digits'),
});