'use client'
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";

const DeleteForm = () => {
    const [deleteModal, setDeleteModal] = useState(false);
    const {toast} = useToast();
    const router = useRouter();
    const handleDelete = async () => {
        try {
            const response = await axios.delete('/api/user/delete-account');
            if (!response.data.success) {
                toast({
                    title: 'Error',
                    description: response.data.message || 'Failed to delete account',
                    variant: 'destructive',
                });
                return;
            }

            toast({
                title: 'Success',
                description: response.data.message || 'Account deleted successfully',
                variant: 'default',
            });
            router.push('/sign-up');
            await signOut();
        } catch (error) {
            console.log("Error while deleting account -->", error);
            toast({
                title: 'Error',
                description: 'Error while deleting account',
                variant: 'destructive',
            });
        } finally{
            setDeleteModal(false);
        }
    }
    return (
        <div className='bg-[#691432] md:w-9/12 w-11/12 mx-auto px-5 py-6 rounded-3xl my-16'>
            <div className='space-y-5'>
                <h1 className="text-3xl text-center">Delete Account</h1>
                <p className='md:text-xl'>Would you like to delete account? <br />This account may contain valuable iteneraries. Deleting your account is permanent and will remove all the contain associated with it.</p>
                <button className='text-[#D43D63] md:text-xl cursor-pointer' onClick={()=>setDeleteModal(true)}>I want to delete my account.</button>
            </div>
            {deleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#343E4E] p-6 rounded-2xl shadow-xl w-[90%] md:w-[40%]">
                        <h2 className="text-xl font-bold mb-4 text-center">Are you confirm to delete your Account?</h2>
                        <div className="flex gap-4 mt-6">
                            <button
                                onClick={() => setDeleteModal(false)}
                                className="px-4 py-2 rounded-lg bg-[#161D29] w-1/2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 rounded-lg bg-[#691432] w-1/2 flex justify-center items-center gap-3"
                            >
                                <RiDeleteBin7Fill className='text-xl'/>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DeleteForm