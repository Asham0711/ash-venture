import Image from 'next/image'
import React from 'react'
import hero from '@/assets/help_page/hero_help.png'
import HighlightText from '@/components/HighlightText'
import { helpData } from '@/data'
import HelpCard from '@/components/HelpPage/HelpCard'
import HelpForm from '@/components/HelpPage/HelpForm'

const HelpPage = () => {
  return (
    <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden">
        {/* Hero Section  */}
        <div className="relative mt-1">
            <Image
                src={hero}
                alt="Hero"
                className="md:h-[560px] h-[220px] w-96 mx-auto object-fit mt-1"
            />
            <div className="absolute inset-0 bg-gray-700 bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <p className="md:text-5xl text-xl font-bold">
                    How Can We Help You?
                </p>
                <p className="md:text-lg md:w-7/12 mx-auto text-sm mt-4">
                    Find answers to your questions, browse helpful resources, or connect with our support team. We&apos;re here to ensure you have the best experience possible.
                </p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 md:py-5 py-3 md:px-0 px-5 mb-5'>
            <h1 className='text-center text-2xl mt-6 font-semibold'>Find your <HighlightText text='Answers' /></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 justify-center md:p-4 md:w-9/12 w-11/12 mx-auto">
                {helpData.map((card, index) => (
                    <HelpCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
        <div className='space-y-10 md:py-4 py-3 md:px-0 px-5 mb-5'>
            <h1 className='text-center text-2xl mt-6 font-semibold'>Still Have <HighlightText text='Issues' />? Explain to us</h1>
            <HelpForm />
        </div>
    </div>
  )
}

export default HelpPage