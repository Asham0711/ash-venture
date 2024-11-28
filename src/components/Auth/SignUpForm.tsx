'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { signUpSchema } from "@/schema/signUpSchema"
import axios from 'axios';

const SignUpForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const { toast } = useToast()
    const router = useRouter();

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    })

    const onSubmit = async (data : z.infer<typeof signUpSchema>) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('/api/auth/send-otp', JSON.stringify({ email: data.email }));
            console.log(response);
            localStorage.setItem('name', data.name);
            localStorage.setItem('email', data.email);
            localStorage.setItem('password', data.password);
            localStorage.setItem('confirmPassword', data.confirmPassword);

            
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

            router.push('/verify-otp');

        }catch (error) {
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
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-xl'>Name</FormLabel>
                                    <Input {...field} name="name" placeholder="Enter your name" className='bg-[#292C35]'/>
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-xl'>Email</FormLabel>
                                    <Input {...field} name="email" placeholder="Enter your email" className='bg-[#292C35]'/>
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel className='text-xl'>Password</FormLabel>
                                    <Input 
                                        type={passwordVisible ? 'text' : 'password'}  // Toggle password visibility
                                        {...field} 
                                        name="password" 
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
                            name="confirmPassword"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel className='text-xl'>Confirm Password</FormLabel>
                                    <Input 
                                        type={confirmPasswordVisible ? 'text' : 'password'}  // Toggle password visibility
                                        {...field} 
                                        name="confirmPassword" 
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
                        <button type="submit" className='w-full py-2 rounded-xl bg-[#E88DEA] text-white text-xl flex justify-center items-center gap-3' disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>
                </Form>
                <div className="text-center mt-4">
                    <p>
                        Already Have an Account?{' '}
                        <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
                          Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm