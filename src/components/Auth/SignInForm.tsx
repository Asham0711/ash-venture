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
import { signInSchema } from '@/schema/signInSchema'
import { signIn } from "next-auth/react"

const SigninForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const { toast } = useToast()
    const router = useRouter();

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            identifier:'',
            password:''
        }
    })

    const onSubmit = async (data : z.infer<typeof signInSchema>) => {
      setIsSubmitting(true);
      const result = await signIn('credentials',{
        redirect: false,
        identifier: data.identifier,
        password: data.password,
      });

      if (result?.error) {
        if (result.error === 'CredentialsSignin') {
          toast({
            title: 'Login Failed',
            description: 'Incorrect username or password',
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Error',
            description: result.error,
            variant: 'destructive',
          });
        }
      }

      if (result?.url) {
        router.replace('/');
        console.log("Logged in");
      }

      setIsSubmitting(false);
    }


    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-8 space-y-4 rounded-lg shadow-md">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-6 space-y-10">
                        <FormField
                            name="identifier"
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
                                        placeholder="Enter your password" 
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
                        <button type="submit" className='w-full py-2 rounded-xl bg-gradient-to-r from-[#f74270] via-[#FBA1B7] to-[#e76988] text-white text-xl flex justify-center items-center gap-3' disabled={isSubmitting}>
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
                <div className="flex justify-end">
                    <Link href={'/forget-password'} className="text-blue-600 hover:text-blue-800">
                        Forget Password
                    </Link>
                </div>
                <div className="text-center mt-4">
                    <p>
                        Didn’t Have an Account?{' '}
                        <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
                          Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SigninForm