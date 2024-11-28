'use client'
import SigninForm from '@/components/Auth/SignInForm'
import HighlightText from '@/components/HighlightText'
import { Spotlight } from '@/components/ui/Spotlight'
import Image from 'next/image'
import React from 'react'
import map from '@/assets/loginMap.jpg'
import { BackgroundGradient } from '@/components/ui/background-gradient'

const SignInPage = () => {
  return (
    <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden">
        <Spotlight
            className="left-0 md:left-60 md:top-56 top-0"
            fill="#E88DEA"
        />
        <div className='w-full flex justify-center items-center md:py-20 py-40'>
            <div className='md:w-[60%] w-full'>
                <div className='md:ml-44 ml-10'>
                    <h1 className='md:text-5xl text-4xl font-bold'><HighlightText text='Welcome Back'/></h1>
                    <p className='md:text-xl text-lg'>Build your itinerary for your next trip...</p>
                </div>
                <SigninForm />
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

export default SignInPage