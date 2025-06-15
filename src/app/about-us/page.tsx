'use client'
import Image from 'next/image'
import React from 'react'
import hero from '@/assets/about_page/hero.jpg'
import founding from '@/assets/about_page/founding.jpg'
import car from "@/assets/about_page/car.jpg";
import HighlightText from '@/components/HighlightText'
import { Button } from '@/components/ui/moving-border'
import { useRouter } from 'next/navigation'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { missionData } from '@/data'

const AboutPage = () => {
  const router = useRouter();
  return (
    <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden">
      {/* Hero Section  */}
      <div className='relative'>
        <Image
          src={hero}
          alt='Hero'
          className='md:h-[560px] h-[220px] object-fit mt-1'
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-60"></div>
        <p className='absolute md:text-5xl font-bold md:top-60 md:right-60 top-20 right-20'>Transforming Travel Planning into <br />Effortless, <HighlightText text='Memorable Adventures.' /></p>
      </div>
      {/* Semi Hero Section  */}
      <div className="max-w-screen container mx-auto p-4 overflow-x-hidden mt-4">
        <h1 className="text-lg md:text-4xl font-semibold text-center mb-5">
          Crafting <HighlightText text='Unforgettable Journeys' />, <br />One Itinerary at a Time
        </h1>
        <p className="md:w-10/12 mx-auto text-center text-xs md:text-xl">We believe that every journey should be as unique as the traveler. Our mission is to help you explore new destinations, experience diverse cultures, and create lasting memories with thoughtfully crafted itineraries.</p>
        <div className="flex justify-center items-center mt-5">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-[#F74270] text-black dark:text-white border-neutral-200 dark:border-slate-800 text-lg"
            onClick={()=> router.push('/sign-up')}
          >
            Explore More
          </Button>
        </div>
      </div>
      {/* Founding Section  */}
      <div className="max-w-screen container mx-auto px-4 py-12 overflow-x-hidden mt-4 bg-[#343E4E] flex justify-between items-center">
        <div className='md:w-1/2 space-y-6 px-8'>
          <h1 className='text-3xl text-center font-bold'><HighlightText text='Our Founding Story' /></h1>
          <p className='text-xs md:text-lg text-left'>Our journey started with a simple idea: to make travel planning easy, enjoyable, and accessible
             for everyone. Frustrated by the hassle of managing countless bookings, schedules, and destinations,
             we decided to create a platform that would bring it all together seamlessly. Our mission is to 
             empower travelers to explore the world on their terms — without the stress of planning.
          </p>
          <p className='text-xs md:text-lg text-left'>By blending smart technology with a passion for discovery, we’ve built a tool that transforms 
            ideas into personalized itineraries, making each trip as unique as the traveler. Today, our growing
             community shares our love for adventure, and we’re excited to help others create memories that 
             last a lifetime.
          </p>
        </div>
        <div className='w-1/2 px-8 hidden md:flex justify-center items-center'>
          <BackgroundGradient className="rounded-[22px] max-w-sm">
            <Image
              src={founding}
              alt='Founding'
              className='h-96 w-72 rounded-3xl'
            />
          </BackgroundGradient>
        </div>
      </div>
      {/* Mission  */}
      <div className="max-w-screen container mx-auto p-4 overflow-x-hidden mt-4">
        <h2 className="text-lg md:text-4xl font-semibold text-center mb-4">
          Our Mission and Values
        </h2>
        <div className='bg-[#F74270] w-[10%] h-0.5 mx-auto mb-5'></div>
        <p className="md:w-9/12 mx-auto text-center text-xs md:text-xl">We strive to be the go-to resource for travelers looking to curate their dream journeys. Every itinerary is carefully designed to give you a meaningful experience that reflects your interests and passions.</p>
        <h1 className='text-center text-sm md:text-2xl mt-6'><HighlightText text='Core Values' /></h1>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={missionData} />
        </div>
      </div>
      {/* Promise  */}
      <div className="max-w-screen container mx-auto p-4 overflow-x-hidden mt-4">
        <h2 className="text-lg md:text-4xl font-semibold text-center mb-4">
          Our <HighlightText text='Promise' /> to You
        </h2>
        <div className='bg-[#F74270] w-[10%] h-0.5 mx-auto mb-5'></div>
        <p className="md:w-9/12 mx-auto text-center text-xs md:text-xl mb-5">We’re here to inspire and support every step of your journey, helping you explore the world with confidence and curiosity. Wherever you go, let us be your guide</p>
        <div className='w-9/12 mx-auto px-8 py-6 flex justify-center items-center'>
          <BackgroundGradient className="rounded-[22px]">
            <Image
              src={car}
              alt='Founding'
              className='w-[700px] rounded-3xl'
            />
          </BackgroundGradient>
        </div>
      </div>
    </div>
  )
}

export default AboutPage