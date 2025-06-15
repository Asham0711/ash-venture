'use client'
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import axios from 'axios';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { resetSchema } from '@/schema/resetSchema';


const ResetForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const { toast } = useToast()
    const router = useRouter();

    const form = useForm<z.infer<typeof resetSchema>>({
        resolver: zodResolver(resetSchema),
        defaultValues:{
        otp:'',
        newPassword:'',
        confirmNewPassword:''
        }
    });

    const onSubmit = async (data : z.infer<typeof resetSchema>) => {
        setIsSubmitting(true);
        try {
        const response = await axios.post('/api/auth/verify-reset-otp', {
            email: localStorage.getItem('email'),
            otp:data.otp,
            newPassword: data.newPassword,
            confirmNewPassword: data.confirmNewPassword
        });
        
        
        if (!response.data.success) {
            toast({
            title: 'Error',
            description: response.data.message || 'Failed to send OTP',
            variant: 'destructive',
            });
            return;
        }

        localStorage.removeItem('email');

        toast({
            title: 'Success',
            description: response.data.message || 'OTP sent successfully',
            variant: 'default',
        });

        router.push('/sign-in')
        } catch (error) {
        console.log("Error while sending OTP -->", error);
        toast({
            title: 'Error',
            description: 'Error while sending password otp',
            variant: 'destructive',
        });
        }
    }

    
    return (
        <div className="flex justify-center items-center">
            <div className="w-full md:w-5/12 p-8 space-y-4 rounded-lg shadow-md">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-6 space-y-10">
                        <FormField
                            name="otp"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-xl'>One Time Password (OTP)</FormLabel>
                                    <Input {...field} placeholder='Enter your 4 digit otp here' className='bg-[#292C35]'/>
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                                name="newPassword"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel className='text-xl'>New Password</FormLabel>
                                        <Input 
                                            type={passwordVisible ? 'text' : 'password'}  // Toggle password visibility
                                            {...field} 
                                            name="newPassword" 
                                            placeholder="Password" 
                                            className='bg-[#292C35]' 
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility on click
                                            className="absolute top-10 right-3 text-gray-500"
                                        >
                                            {passwordVisible ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                        <FormMessage className="text-red-500 text-sm font-bold"/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="confirmNewPassword"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel className='text-xl'>Confirm New Password</FormLabel>
                                        <Input 
                                            type={confirmPasswordVisible ? 'text' : 'password'}  // Toggle password visibility
                                            {...field} 
                                            name="confirmNewPassword" 
                                            placeholder="Confirm password" 
                                            className='bg-[#292C35]' 
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} // Toggle visibility on click
                                            className="absolute top-10 right-3 text-gray-500"
                                        >
                                            {confirmPasswordVisible ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                        <FormMessage className="text-red-500 text-sm font-bold"/>
                                    </FormItem>
                                )}
                            />
                        <button type="submit" className='w-full py-2 rounded-xl bg-[#F74270] text-white text-xl flex justify-center items-center gap-3' disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </form>
                </Form>
                <div className="flex justify-end">
                    <Link href={'/sign-in'} className="text-blue-600 hover:text-blue-800">
                        Back to Sign in
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResetForm