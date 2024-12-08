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
import { passwordResetSchema } from '@/schema/passwordResetSchema';


const PasswordForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const { toast } = useToast()
    

    const form = useForm<z.infer<typeof passwordResetSchema>>({
        resolver: zodResolver(passwordResetSchema),
        defaultValues:{
            currentPassword:'',
            newPassword: ''
        }
    });

    const handleCancel = () => {
        form.reset();
    };

    const onSubmit = async (data : z.infer<typeof passwordResetSchema>) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('/api/user/change-password', data);
        
            if (!response.data.success) {
                toast({
                title: 'Error',
                description: response.data.message || 'Failed to change password',
                variant: 'destructive',
                });
                return;
            }

            toast({
                title: 'Success',
                description: response.data.message || 'Password Changed successfully',
                variant: 'default',
            });
        } catch (error) {
            console.log("Error while changing password -->", error);
            toast({
                title: 'Error',
                description: 'Error while changing password',
                variant: 'destructive',
            });
        } finally{
            setIsSubmitting(false);
            handleCancel();
            setPasswordVisible(false);
            setNewPasswordVisible(false);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center md:w-9/12 w-11/12 mx-auto bg-[#343E4E] px-5 py-6 rounded-3xl mt-16">
            <h1 className="text-3xl mb-4">Password</h1>
            <div className="w-full md:px-8 py-4 space-y-4 rounded-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-6 space-y-10">
                        <div className='w-full flex flex-col md:flex-row gap-5'>
                            <FormField
                                name="currentPassword"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="relative md:w-1/2">
                                        <FormLabel className='text-xl'>Current Password</FormLabel>
                                        <Input 
                                            type={passwordVisible ? 'text' : 'password'}  // Toggle password visibility
                                            {...field} 
                                            name="currentPassword" 
                                            placeholder="Current Password" 
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
                                name="newPassword"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="relative md:w-1/2">
                                        <FormLabel className='text-xl'>New Password</FormLabel>
                                        <Input 
                                            type={newPasswordVisible ? 'text' : 'password'}  // Toggle password visibility
                                            {...field} 
                                            name="newPassword" 
                                            placeholder="New password" 
                                            className='bg-[#292C35] w-full' 
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setNewPasswordVisible(!newPasswordVisible)} // Toggle visibility on click
                                            className="absolute top-10 right-3 text-gray-500"
                                        >
                                            {newPasswordVisible ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                        <FormMessage className="text-red-500 text-sm font-bold"/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex justify-end gap-5">
                            <button type="button" className='px-4 py-2 rounded-xl bg-[#161D29] text-white text-xl flex justify-center items-center gap-3' onClick={handleCancel}>
                                Cancel
                            </button>
                            <button type="submit" className='px-4 py-2 rounded-xl bg-[#E88DEA] text-white text-xl flex justify-center items-center gap-1' disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Saving
                                    </>
                                ) : (
                                    'Save'
                                )}
                            </button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default PasswordForm