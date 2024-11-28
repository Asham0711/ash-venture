'use client'
import { useToast } from '@/hooks/use-toast';
import { verifySchema } from '@/schema/verifySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import axios from 'axios';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

const OtpForm = () => {
    const router = useRouter();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof verifySchema>>({
        resolver: zodResolver(verifySchema)
    })

    const onSubmit = async (data: z.infer<typeof verifySchema>) => {
        setIsSubmitting(true);
        try {
            const name =  localStorage.getItem('name')
            const email = localStorage.getItem('email')
            const password = localStorage.getItem('password')
            const confirmPassword = localStorage.getItem('confirmPassword')
            const response = await axios.post('/api/auth/sign-up', {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                otp: data.otp
            })
            if (!response.data.success) {
                toast({
                    title: 'Error',
                    description: response.data.message || 'Failed to sign up',
                    variant: 'destructive',
                });
                return;
            }

            toast({
                title: 'Success',
                description: response.data.message || 'User created successfully',
                variant: 'default',
            });

            localStorage.removeItem('name')
            localStorage.removeItem('email')
            localStorage.removeItem('password')
            localStorage.removeItem('confirmPassword')

            router.push('/sign-in');
        } catch (error) {
            console.log("Error while sending OTP -->", error);
            toast({
                title: 'Error',
                description: 'An unexpected error occurred',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-8 space-y-4 rounded-lg shadow-md">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-6 space-y-10">
                        <FormField
                            name="otp"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-xl'>Verification Code</FormLabel>
                                    <Input {...field} placeholder='Enter your 4 digit verification code here' className='bg-[#292C35]'/>
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />
                        <button type="submit" className='w-full py-2 rounded-xl bg-[#E88DEA] text-white text-xl flex justify-center items-center gap-3' disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                                </>
                            ) : (
                                'Verify'
                            )}
                        </button>
                    </form>
                </Form>
                <div className="flex justify-end">
                    <Link href={'/forget-password'} className="text-blue-600 hover:text-blue-800">
                        Resend OTP
                    </Link>
                </div>
                <div className="text-center mt-4">
                    <p>
                        Want to go back?{' '} 
                        <Link href={'/sign-up'} className="text-blue-600 hover:text-blue-800">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OtpForm