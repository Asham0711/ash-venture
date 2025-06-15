'use client'
import HighlightText from '@/components/HighlightText'
import { Spotlight } from '@/components/ui/Spotlight'
import Image from 'next/image'
import React from 'react'
import map from '@/assets/loginMap.jpg'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import SignUpForm from '@/components/Auth/SignUpForm'

const SignUpPage = () => {
  return (
    <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden md:py-10 py-28">
        <Spotlight
            className="left-0 md:left-60 md:top-56 top-0"
            fill="#F74270"
        />
        <div className='flex flex-col justify-center items-center md:gap-5 gap-3'>
            <h1 className='md:text-4xl text-2xl font-bold'>Join the millions creating their <br /><HighlightText text='Itenarary' /> for the next trip</h1>
            <p className='md:text-xl text-lg'>Build your itinerary for your next trip...</p>
        </div>
        <div className='w-full flex justify-center items-center'>
            <div className='md:w-[60%] w-full'>
                <SignUpForm />
            </div>
            <div className='md:w-[40%] md:flex md:justify-center md:items-center hidden'>
                <BackgroundGradient className="rounded-3xl">
                    <Image
                        src={map}
                        alt='Map'
                        className='w-96 rounded-3xl'
                    />
                </BackgroundGradient>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage