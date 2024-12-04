import HighlightText from '@/components/HighlightText'
import Link from 'next/link'
import React from 'react'

const TroubleShootPage = () => {
  return (
    <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden">
        <div className='w-full bg-[#343E4E] md:px-6 px-2 py-10 flex justify-center items-center flex-col gap-4'>
            <h1 className='text-3xl md:text-4xl font-semibold text-center'><HighlightText text='Troubleshooting' /> Assistance</h1>
            <p className='md:text-xl text-lg text-center'>Find solutions to common issues and get back to planning your dream trip!</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 md:py-5 py-3 md:px-0 px-5 mb-5'>
            <h1 className='text-center text-2xl mt-6 font-semibold'><HighlightText text='Common Issues' /></h1>
            <div className='space-y-8'>
                <div className='space-y-2'>
                    <h1 className='md:text-2xl text-xl'>1. Login Problems</h1>
                    <ul className='md:text-lg text-sm'>
                        <li>&bull; Description: &quot;If you&apos;re having trouble logging in, ensure that you are using the correct email and password.&quot;</li>
                        <li>&bull; Solution: &quot;Try resetting your password using the &apos;Forgot Password&apos; link. If you continue to experience issues, contact support.&quot;</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                    <h1 className='md:text-2xl text-xl'>2. Trip Generation Errors</h1>
                    <ul className='md:text-lg text-sm'>
                    <li>&bull; Description: &quot;If a page isn&apos;t loading, it could be a connectivity issue.&quot;</li>
                    <li>&bull; Solution: &quot;Refresh the page or check your internet connection. Try accessing the site in a different browser.&quot;</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                    <h1 className='md:text-2xl text-xl'>3. Profile Update Issues</h1>
                    <ul className='md:text-lg text-sm'>
                    <li>&bull; Description: &quot;If you cannot update your profile, it may be due to missing required information.&quot;</li>
                    <li>&bull; Solution: &quot;Ensure all mandatory fields are filled out. Log out and log back in to see changes.&quot;</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                    <h1 className='md:text-2xl text-xl'>4. Page Not Loading</h1>
                    <ul className='md:text-lg text-sm'>
                    <li>&bull; Description: &quot;If a page isn&apos;t loading, it could be a connectivity issue.&quot;</li>
                    <li>&bull; Solution: &quot;Refresh the page or check your internet connection. Try accessing the site in a different browser.&quot;</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-white w-[90%] h-0.5 mx-auto mb-5'></div>
        <div className='space-y-4 mb-10'>
            <h1 className='text-center text-2xl mt-6 font-semibold'>General Troubleshooting Steps</h1>
            <div className='bg-[#343E4E] md:w-[60%] w-[80%] mx-auto rounded-3xl flex flex-col gap-3 justify-center px-8 py-6'>
                <p className='text-xl'>Step 1: &quot;Clear your browser cache and cookies.&quot;</p> 
                <p className='text-xl'>Step 2: &quot;Try using a different browser or device.&quot;</p> 
                <p className='text-xl'>Step 3: &quot;Disable browser extensions that may interfere with site functionality.&quot;</p> 
                <p className='text-xl'>Step 4: &quot;Ensure your browser is up to date.&quot;</p>
            </div>
        </div>
        <div className='bg-white w-[90%] h-0.5 mx-auto mb-5'></div>
        <div className='flex justify-center items-center md:py-5 py-3'>
            <h1 className='md:text-4xl'>Still Having Trouble? <br />Check the <Link href={'/faq'}><HighlightText text='Frequently Asked Questions (FAQs)' /></Link></h1>
        </div>
    </div>
  )
}
export default TroubleShootPage