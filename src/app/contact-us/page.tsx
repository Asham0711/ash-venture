'use client'
import Image from 'next/image'
import React from 'react'
import hero from '@/assets/contactPage/contact_hero.webp'
import HighlightText from '@/components/HighlightText'
import Social from '@/components/ContactPage/Social'
import BasicContacts from '@/components/ContactPage/BasicContacts'
import ContactForm from '@/components/ContactPage/ContactForm'
import map from '@/assets/contactPage/map.jpg'
import { BackgroundGradient } from '@/components/ui/background-gradient'

const ContactPage = () => {
  return (
    <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden">
      {/* Hero Section  */}
      <div className="relative">
        <Image
          src={hero}
          alt="Hero"
          className="md:h-[560px] h-[220px] object-fit mt-1"
        />
        <div className="absolute inset-0 bg-gray-700 bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[50] text-white text-center">
          <p className="md:text-5xl text-xl font-bold">
            Let’s Make Your <HighlightText text="Journey Unforgettable" /> <br />
            Reach Out to Us!
          </p>
          <p className="md:text-lg text-sm mt-4">
            We’re here to help you plan, customize, and perfect your travel experience
          </p>
        </div>
      </div>
      {/* Semi Hero  */}
      <div className='my-8'>
        <h1 className="text-lg md:text-4xl font-semibold text-center mb-5">
          Got an Issue? We’re here for you. <br />Let us <HighlightText text='know' />
        </h1>
      </div>
      {/* Main Section  */}
      <div className='flex md:flex-row flex-col'>
        <div className='flex flex-col gap-12 md:w-[45%] md:pl-24 md:pr-0 pl-12 pr-12 py-4'>
          <BasicContacts />
          <Social />
        </div>
        <div className='md:w-[55%] md:py-2 py-8'>
          <ContactForm />
        </div>
      </div>
      {/* Map  */}
      <div className='flex w-full justify-center items-center px-16 py-10'>
        <BackgroundGradient className="rounded-3xl">
          <Image
            src={map}
            alt='Map'
            className='rounded-3xl object-cover h-64'
          />
        </BackgroundGradient>
      </div>
    </div>
  )
}

export default ContactPage