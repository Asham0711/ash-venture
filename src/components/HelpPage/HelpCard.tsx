/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export interface HelpCardProps {
  link: string;
  image: any;
  title: string;
  description: string;
}

const HelpCard = ({link, image, title, description}: HelpCardProps) => {
  return (
    <div className='bg-[#343E4E] rounded-2xl py-5 px-3 hover:scale-105 transition-all duration-300'>
        <Link href={link} className='flex gap-4'>
            <div className='flex justify-center items-center '>
                <Image
                    src={image}
                    alt='Image'
                    width={100}
                />
            </div>
            <div className='py-10 w-[70%] space-y-2'>
                <h1 className='text-xl'>{title}</h1>
                <p className='text-sm'>{description}</p>
            </div>
        </Link>
    </div>
  )
}

export default HelpCard