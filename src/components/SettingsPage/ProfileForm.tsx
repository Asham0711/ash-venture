'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { profileSchema } from "@/schema/emailSchema"
import axios from "axios"

const ProfileForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { toast } = useToast();

    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name:'',
            phone:''
        }
    })

    const onSubmit = async (data : z.infer<typeof profileSchema>) => {
        setIsSubmitting(true);
        try {
            const result = await axios.put('/api/user/update-profile',{
                name: data.name,
                phone: data.phone
            });

            if (!result.data.success) {
                toast({
                    title: 'Failed to update details',
                    description: 'Some server side error occured',
                    variant: 'destructive',
                });
            }

            toast({
                title: 'Profile updated successfully',
                description: 'Refresh the page to see the changes',
                variant: 'default',
            });
        } catch (error) {
            console.log("Error while updating profile -->", error);
            toast({
                title: 'Error',
                description: 'An unexpected error occurred',
                variant: 'destructive',
            });
        }finally{
            setIsSubmitting(false);
        }
    }

    const handleCancel = () => {
        form.reset();
    };



    return (
        <div className="flex flex-col justify-center items-center md:w-9/12 w-11/12 mx-auto bg-[#343E4E] px-5 py-6 rounded-3xl mt-16">
            <h1 className="text-3xl">Profile Information</h1>
            <div className="w-full px-8 py-4 space-y-4 rounded-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="md:space-y-6 space-y-10 w-full">
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-xl'>Name</FormLabel>
                                    <Input {...field} name="name" placeholder="Enter your name" className='bg-[#292C35] w-full'/>
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="phone"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-xl'>Phone Number</FormLabel>
                                    <Input {...field} name="phone" placeholder="Enter your phone number" className='bg-[#292C35]' />
                                    <FormMessage className="text-red-500 text-sm font-bold"/>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end gap-5">
                            <button type="button" className='px-4 py-2 rounded-xl bg-[#161D29] text-white text-xl flex justify-center items-center gap-3' onClick={handleCancel}>
                                Cancel
                            </button>
                            <button type="submit" className='px-4 py-2 rounded-xl bg-[#E88DEA] text-white text-xl flex justify-center items-center gap-3' disabled={isSubmitting}>
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

export default ProfileForm