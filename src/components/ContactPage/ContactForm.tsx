'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from "lucide-react"
import { contactFormSchema } from '@/schema/contactSchema';
import { Textarea } from '../ui/textarea';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });
    const onSubmit = async () => {
        setIsSubmitting(true);
        try {
            console.log("Contact form")
        } catch (error) {
            console.error('Error during sign-up:', error);
        } finally{
            setIsSubmitting(false);
        }
    }
   return (
        <div className="flex justify-center items-center">
            <div className="md:w-full w-11/12 mx-auto max-w-md bg-[#343E4E] px-8 py-6 space-y-8 rounded-3xl shadow-md">
                <h1 className='md:text-3xl text-2xl text-center'>Write your Query here...</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField 
                            name="name"
                            control = {form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='md:text-xl'>Name</FormLabel>
                                    <Input
                                        {...field}
                                        placeholder="Enter your name"
                                        className='bg-[#292C35]'
                                    />
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='md:text-xl'>Email</FormLabel>
                                    <Input {...field} name="email" placeholder="Enter your email" className='bg-[#292C35]'/>
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="message"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='md:text-xl'>Phone Number</FormLabel>
                                    <Input {...field} name="password" placeholder="Enter your phone number" className='bg-[#292C35]'/>
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="phone"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='md:text-xl'>Message</FormLabel>
                                    <Textarea {...field} placeholder="Enter your message" className='bg-[#292C35] border'/>
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className='w-full rounded-xl text-lg' disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                                </>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ContactForm