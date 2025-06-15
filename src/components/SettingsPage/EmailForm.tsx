'use client'
import { useToast } from '@/hooks/use-toast';
import { emailSchema } from '@/schema/emailSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import axios from 'axios';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Loader2 } from 'lucide-react';


const EmailForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailModal, setEmailModal] = useState(false);
    const [otpForm, setOtpForm] = useState({
        otp: '',
        newEmail: ''
    });
    const { toast } = useToast()
    

    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues:{
            email:''
        }
    });
    const onSubmit = async (data : z.infer<typeof emailSchema>) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('/api/user/email-otp', data);
        
            if (!response.data.success) {
                toast({
                title: 'Error',
                description: response.data.message || 'Failed to send OTP',
                variant: 'destructive',
                });
                return;
            }

            toast({
                title: 'Success',
                description: response.data.message || 'OTP sent successfully',
                variant: 'default',
            });

            setEmailModal(true);
        } catch (error) {
            console.log("Error while sending OTP -->", error);
            toast({
                title: 'Error',
                description: 'Error while sending otp',
                variant: 'destructive',
            });
        } finally{
            setIsSubmitting(false);
        }
    }

    const handleCancel = () => {
        form.reset();
    };

    const handleModalSave = async () => {
        try {
            const response = await axios.put('/api/user/update-email', otpForm);
            if (!response.data.success) {
                toast({
                title: 'Error',
                description: response.data.message || 'Failed to update Email',
                variant: 'destructive',
                });
                return;
            }

            toast({
                title: 'Success',
                description: response.data.message || 'Email updated successfully',
                variant: 'default',
            });

        } catch (error) {
            console.log("Error while updating email -->", error);
            toast({
                title: 'Error',
                description: 'Error while updating email',
                variant: 'destructive',
            });
        } finally{
            setEmailModal(false);
        }
    }
    return (
        <div className="flex flex-col justify-center items-center md:w-9/12 w-11/12 mx-auto bg-[#343E4E] px-5 py-6 rounded-3xl mt-16">
            <h1 className="text-3xl">Email Information</h1>
            <div className="w-full md:px-8 py-4 space-y-4 rounded-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-6 space-y-10">
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-xl'>Email</FormLabel>
                                    <Input {...field} placeholder='Enter your registered email address here' className='bg-[#292C35]'/>
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end gap-5">
                            <button type="button" className='px-4 py-2 rounded-xl bg-[#161D29] text-white text-xl flex justify-center items-center gap-3' onClick={handleCancel}>
                                Cancel
                            </button>
                            <button type="submit" className='px-4 py-2 rounded-xl bg-[#F74270] text-white text-xl flex justify-center items-center gap-3' disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Updating
                                    </>
                                ) : (
                                    'Update'
                                )}
                            </button>
                        </div>
                    </form>
                </Form>
            </div>
            {emailModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#343E4E] p-6 rounded-2xl shadow-xl w-[90%] md:w-[40%]">
                        <h2 className="text-xl font-bold mb-4 text-center">Verify OTP and change Email</h2>
                        <div className="space-y-4">
                            <Input
                                placeholder="Enter your 4 digit OTP here"
                                value={otpForm.otp}
                                onChange={(e) => setOtpForm({ ...otpForm, otp: e.target.value })}
                                name="otp"
                                className="bg-[#292C35] w-full"
                            />
                            <Input
                                placeholder="Enter New Email here"
                                value={otpForm.newEmail}
                                onChange={(e) => setOtpForm({ ...otpForm, newEmail: e.target.value })}
                                name="newEmail"
                                className="bg-[#292C35] w-full"
                            />
                        </div>
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                onClick={() => setEmailModal(false)}
                                className="px-4 py-2 rounded-lg bg-[#161D29]"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleModalSave}
                                className="px-4 py-2 rounded-lg bg-[#F74270]"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EmailForm