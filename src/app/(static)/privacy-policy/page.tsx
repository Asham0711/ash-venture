import HighlightText from '@/components/HighlightText'
import Image from 'next/image'
import React from 'react'
import privacy from '@/assets/privacy.png'
import { Spotlight } from '@/components/ui/Spotlight'

const PrivacyPage = () => {
  return (
    <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden">
        <Spotlight
            className="left-0 md:left-60 md:top-56 top-0"
            fill="#F74270"
        />
        <h1 className="text-3xl md:text-4xl font-semibold text-center my-5">
          Your <HighlightText text='Privacy' />, Our Priority
        </h1>
        <div className='w-full flex md:flex-row flex-col md:py-8 py-4 px-5 md:gap-0 gap-3'>
            <div className='md:w-[50%] flex flex-col justify-center items-center gap-4 px-5 md:px-10'>
                <h1 className='md:text-3xl text-2xl text-left'>Welcome to our Privacy Policy</h1>
                <p className='md:text-xl text-lg'>We&apos;re committed to safeguarding your personal information and ensuring transparency about how we handle data. This page outlines how we collect, use, and protect your personal information when you interact with our services.</p>
                <p className='md:text-xl text-lg'>By using our website, you consent to the terms laid out here. If you have any questions, feel free to contact us.</p>
            </div>
            <div className='flex justify-center items-center md:w-[50%]'>
                <Image
                    src={privacy}
                    alt='Privacy'
                    className='w-96'
                />
            </div>
        </div>
        <div className='bg-[#343E4E] m-10 rounded-3xl py-8 px-6 space-y-8'>
          <div className='space-y-2'>
            <h1 className='md:text-2xl text-xl'>Information We Collect</h1>
            <p className='md:text-lg'>We collect information directly from you, automatically when you use our services, and from third parties. This includes your name, contact information, payment details, and site usage data.</p>
            <ul className='md:text-lg'>
              <li>Types of Information Collected:</li>
              <li>&bull; Personal Identification: Name, email, phone number.</li>
              <li>&bull; Usage Information: Device type, IP address, pages visited, and interaction data.</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h1 className='md:text-2xl text-xl'>How We Use Your Data</h1>
            <ul className='md:text-lg'>
              <li>Your data is used to:</li>
              <li>&bull; Provide and personalize our services.</li>
              <li>&bull; Process transactions and improve our platform.</li>
              <li>&bull; Send updates, offers, or responses to your inquiries.</li>
            </ul>
            <p className='md:text-lg'>We use your information responsibly, only for purposes you consent to, and always prioritize transparency.</p>
          </div>
          <div className='space-y-2'>
            <h1 className='md:text-2xl text-xl'>Data Sharing & Disclosure</h1>
            <p className='md:text-lg'>We only share data as needed, such as with trusted partners for service delivery, or when legally required. We never sell your information to third parties.</p>
            <ul className='md:text-lg'>
              <li>Trusted Partners Include:</li>
              <li>&bull; Customer service platforms.</li>
              <li>&bull; Analytics services.</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h1 className='md:text-2xl text-xl'>Data Retention & Security</h1>
            <p className='md:text-lg'>We retain your data only as long as needed and apply industry-standard security measures, including encryption and regular security audits.</p>
            <ul className='md:text-lg'>
              <li>Security Practices:</li>
              <li>&bull; SSL encryption.</li>
              <li>&bull; Regular data backups.</li>
              <li>&bull; Access restrictions.</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h1 className='md:text-2xl text-xl'>Your Rights & Choices</h1>
            <ul className='md:text-lg'>
              <li>You have the right to:</li>
              <li>&bull; Access or correct your information.</li>
              <li>&bull; Request deletion or restrict certain data processing activities.</li>
              <li>&bull; Opt out of marketing communications.</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h1 className='md:text-2xl text-xl'>Cookies & Tracking Technologies</h1>
            <p className='md:text-lg'>We use cookies to enhance user experience, analyze usage patterns, and deliver personalized content. You can manage cookie preferences in your browser settings.</p>
            <ul className='md:text-lg'>
              <li>Types of Cookies We Use:</li>
              <li>&bull; Essential Cookies: Required for site functionality.</li>
              <li>&bull; Analytics Cookies: Help us understand site usage.</li>
              <li>&bull; Marketing Cookies: Provide personalized offers.</li>
            </ul>
          </div>
          <div className='space-y-2'>
            <h1 className='md:text-2xl text-xl'>Changes to This Policy</h1>
            <p className='md:text-lg'>We may update this policy from time to time. We’ll notify you of any significant changes. Your continued use of our site after updates signifies acceptance.</p>
            <p className='md:text-lg'>Last Updated: 1st December 2024</p>
          </div>
          <div className='space-y-2'>
            <h1 className='md:text-2xl text-xl'>Contact Us</h1>
            <ul className='md:text-lg'>
              <li>For questions about this policy or your data, reach out to us at:</li>
              <li>&bull; Email: support@ashventure.com</li>
              <li>&bull; Phone: 8481XXXXXX</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default PrivacyPage