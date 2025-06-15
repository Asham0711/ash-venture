'use client'
import Image from 'next/image'
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import error from '@/assets/error.png'
import { Spotlight } from '@/components/ui/Spotlight';
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
    const router = useRouter();
    return (
        <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden flex flex-col md:gap-5 gap-8 justify-center items-center">
            <Spotlight
                className="left-0 md:left-60 md:top-56 top-0"
                fill="#F74270"
            />
            <div className='flex md:flex-row flex-col md:gap-5 gap-3 justify-center items-center md:w-6/12 w-10/12 mx-auto'>
                <div>
                    <Image
                        src={error}
                        alt='Error'
                        width={300}
                        height={300}
                    />
                </div>
                <div>
                    <p className='text-xl'>Oops! The page you&apos;re trying to access is either not available or moved to different address</p>
                </div>
            </div>
            <div>
                <button 
                    className='flex justify-center items-center gap-3 px-4 py-2 bg-[#F74270] rounded-xl'
                    onClick={()=> router.push('/')}
                >
                    <FaArrowLeftLong />
                    Go to Home
                </button>
            </div>
        </div>
    )
}

export default ErrorPage