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
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const ResetOtpForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast()
  const router = useRouter();

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues:{
      email:''
    }
  });

  const onSubmit = async (data : z.infer<typeof emailSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/auth/forget-password', data);
      localStorage.setItem('email', data.email);
      
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

      router.push('/reset-password')
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

export default ResetOtpForm