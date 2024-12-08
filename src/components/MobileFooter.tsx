import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import blackLogo from '@/assets/logo_black.png';
import FlipIcon from './ui/icon-flip';

const MobileFooter = () => {
  return (
    <div className="bg-gradient-to-r from-[#5F0FFF] via-[#A909FF] to-[#E88DEA] w-full text-[#000000] flex flex-col items-center py-5">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-4">
        <Image src={blackLogo} width={150} height={150} alt="Black logo" />
        <p className="text-sm mt-2 text-center">A Trip Planner for Everyone</p>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center items-center gap-10 w-full mb-4">
        <ul className="text-center text-sm font-semibold space-y-3">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about-us'}>About Us</Link>
          </li>
          <li>
            <Link href={'/contact-us'}>Contact</Link>
          </li>
        </ul>
        <ul className="text-center text-sm font-semibold space-y-3">
            <li>
                <Link href={'/faq'}>FAQ</Link>
            </li>
            <li>
                <Link href={'/troubleshoot'}>Troubleshoot</Link>
            </li>
            <li>
                <Link href={'/privacy-policy'}>Privacy Policy</Link>
            </li>
            <li>
                <Link href={'/help-center'}>Help Center</Link>
            </li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-3 mb-4">
        <Link href={'#'}>
          <FlipIcon icon={<FaTwitter size={20} />} />
        </Link>
        <Link href={'#'}>
          <FlipIcon icon={<FaInstagram size={20} />} />
        </Link>
        <Link href={'#'}>
          <FlipIcon icon={<FaLinkedin size={20} />} />
        </Link>
      </div>

      {/* Divider */}
      <div className="bg-[#000000] w-[90%] h-0.5 mb-4"></div>

      {/* Footer Text */}
      <div className="text-xs text-center">
        <p>&copy; Md Asham Imad | All rights reserved</p>
        <p>
          Made with <span className="text-red-600">&#10084;</span> by Asham
        </p>
      </div>
    </div>
  );
};

export default MobileFooter;