/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import Image from 'next/image'
import profile from '@/assets/profile.png'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState<null | { 
        name?: string; 
        email?: string; 
        phone?: string; 
        profilePicture?: string;
        trips?: string[];
    }>(null);
    const { toast } = useToast()
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/user/my-profile');
                if (!response.data.success) {
                    toast({
                        title: 'Error',
                        description: response.data.message || 'Failed to fetch user',
                        variant: 'destructive',
                    });
                    return;
                }
                setUser(response.data.user);
            } catch (error) {
                console.log("Error while fetching user -->", error);
                toast({
                    title: 'Error',
                    description: 'An unexpected error occurred',
                    variant: 'destructive',
                });
            }
        }
        fetchUser();
    },[])
    return (
        <div className='md:w-9/12 w-11/12 mx-auto bg-[#343E4E] flex flex-col md:flex-row items-center justify-center px-5 py-6 rounded-3xl md:gap-52 gap-12'>
            <div>
                <Image
                    src={profile}
                    alt="Profile Picture"
                    width={150}
                    height={150}
                />
            </div>
            <div className='space-y-6'>
                <p className='md:text-xl text-lg'><strong>Name:</strong> {user?.name}</p>
                <p className='md:text-xl text-lg'><strong>Email:</strong> {user?.email}</p>
                <p className='md:text-xl text-lg'><strong>Phone Number:</strong> {user?.phone}</p>
            </div>
        </div>
    )
}

export default Profile