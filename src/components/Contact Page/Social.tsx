import Link from 'next/link'
import React from 'react'
import FlipIcon from '../ui/icon-flip'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Social = () => {
  return (
    <div className='bg-[#343E4E] px-8 py-4 space-y-8 rounded-3xl'>
        <h1 className='text-2xl text-center'>Connect on Social Media</h1>
        <div className='grid grid-cols-2 gap-4'>
            <Link href={'#'}>
                <div className='flex justify-start items-center gap-2'>
                    <FlipIcon icon={<FaTwitter size={20} />} />
                    <h1 className='text-xl'>Twitter</h1>
                </div>
            </Link>
            <Link href={'#'}>
                <div className='flex justify-start items-center gap-2'>
                    <FlipIcon icon={<FaFacebook size={20} />} />
                    <h1 className='text-xl'>Facebook</h1>
                </div>
            </Link>
            <Link href={'#'}>
                <div className='flex justify-start items-center gap-2'>
                    <FlipIcon icon={<FaLinkedin size={20} />} />
                    <h1 className='text-xl'>LinkedIn</h1>
                </div>
            </Link>
            <Link href={'#'}>
                <div className='flex justify-start items-center gap-2'>
                    <FlipIcon icon={<FaInstagram size={20} />} />
                    <h1 className='text-xl'>Instagram</h1>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Social