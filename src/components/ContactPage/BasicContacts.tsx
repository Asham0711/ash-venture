import React from 'react'
import FlipIcon from '../ui/icon-flip'
import { TbMailFilled } from 'react-icons/tb'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoCallSharp } from 'react-icons/io5'

const BasicContacts = () => {
  return (
    <div className='bg-[#343E4E] px-8 py-4 space-y-8 rounded-3xl'>
        <div className='space-y-2'>
            <div className='flex justify-start items-center gap-2'>
                <FlipIcon icon={<TbMailFilled size={30} />} />
                <h1 className='text-2xl'>Chat on Us</h1>
            </div>
            <div className='flex flex-col items-start justify-center text-sm'>
                <p>Our friendly team is here to help.</p>
                <p>support@ashventure.com</p>
            </div>
        </div>
        <div className='space-y-2'>
            <div className='flex justify-start items-center gap-2'>
                <FlipIcon icon={<FaGlobeAmericas size={30} />} />
                <h1 className='text-2xl'>Visit us</h1>
            </div>
            <div className='flex flex-col items-start justify-center text-sm'>
                <p>Come and say hello at our office HQ.</p>
                <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, <br />Bangalore-560016</p>
            </div>
        </div>
        <div className='space-y-2'>
            <div className='flex justify-start items-center gap-2'>
                <FlipIcon icon={<IoCallSharp size={30} />} />
                <h1 className='text-2xl'>Call us</h1>
            </div>
            <div className='flex flex-col items-start justify-center text-sm'>
                <p>Mon - Fri From 8am to 5pm</p>
                <p>+91 9330235553</p>
            </div>
        </div>
    </div>
  )
}

export default BasicContacts