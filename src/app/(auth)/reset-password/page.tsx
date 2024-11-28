import ResetForm from '@/components/Auth/ResetForm'
import HighlightText from '@/components/HighlightText'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const ResetPage = () => {
  return (
    <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden md:py-20 py-40">
        <Spotlight
            className="left-0 md:left-60 md:top-56 top-0"
            fill="#E88DEA"
        />
        <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='md:text-5xl text-4xl font-bold'><HighlightText text='Reset your password' /></h1>
            <p className='md:text-xl text-lg md:w-6/12 w-11/12 mx-auto text-center'>Enter the OTP sent to your email and then enter new password</p>
        </div>
        <ResetForm />
    </div>
  )
}

export default ResetPage