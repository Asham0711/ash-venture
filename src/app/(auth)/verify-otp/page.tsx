import OtpForm from '@/components/Auth/OTPForm'
import HighlightText from '@/components/HighlightText'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const VerifyPage = () => {
  return (
    <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden md:py-20 py-40">
        <Spotlight
            className="left-0 md:left-60 md:top-56 top-0"
            fill="#F74270"
        />
        <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='md:text-5xl text-4xl font-bold'><HighlightText text='Verify Email' /></h1>
            <p className='md:text-xl text-lg'>A verification code has been sent to you. <br />Enter the code below</p>
        </div>
        <OtpForm/>
    </div>
  )
}

export default VerifyPage