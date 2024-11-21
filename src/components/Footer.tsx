import Image from 'next/image'
import React from 'react'
import blackLogo from '@/assets/logo_black.png'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#5F0FFF] via-[#A909FF] to-[#E88DEA] w-full text-[#000000] flex flex-col gap-4 justify-center items-center py-5'>
        <div className='flex justify-between items-center w-11/12 mx-auto'>
            <div className='flex flex-col justify-center items-center p-5 w-[40%]'>
                <Image 
                    src={blackLogo}
                    width={300}
                    height={300}
                    alt='Black logo'
                />
                <p className='text-xl'>A Trip Planner for Everyone</p>
            </div>
            <div className='flex flex-col justify-center items-start w-[30%] pl-20 text-center text-lg font-bold'>
                <ul className='space-y-3'>
                    <li>
                        <Link href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about-us'}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contact-us'}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col justify-center items-start w-[30%] pl-20 text-center text-lg font-bold'>
                <ul className='space-y-3'>
                    <li>
                        <Link href={'/faq'}>
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link href={'/troubleshoot'}>
                            Troubleshoot
                        </Link>
                    </li>
                    <li>
                        <Link href={'/privacy-policy'}>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href={'/help-center'}>
                            Help Center
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex gap-5 text-2xl'>
            <Link href={'#'} className='hover:scale-110 transition-all duration-300'>
                <FaTwitter />
            </Link>
            <Link href={'#'} className='hover:scale-110 transition-all duration-300'>
                <FaInstagram />
            </Link>
            <Link href={'#'} className='hover:scale-110 transition-all duration-300'>
                <FaLinkedin />
            </Link>
        </div>
        <div className='bg-[#000000] w-[90%] h-0.5 mx-auto'></div>
        <div className='8/12 mx-auto text-center mb-2'>
            <p>&copy; Md Asham Imad | All right reserved</p>
            <p>Made with <span className='text-red-600'>&#10084;</span> by Asham</p>
        </div>
    </div>
  )
}

export default Footer