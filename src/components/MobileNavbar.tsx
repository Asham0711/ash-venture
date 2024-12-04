'use client';
import React, { useState } from 'react';
import logo from '@/assets/logo_full.png';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { signOut, useSession } from 'next-auth/react';

const MobileNavbar = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close the sidebar
    };

    const handleLogout = () => {
        setIsOpen(false);
        setShowLogoutModal(true);
    }

    return (
        <>
            <div className='flex justify-between items-center px-6 py-4 shadow-md shadow-gray-400'>
                <Image src={logo} width={200} height={200} alt="Logo" />
                <button
                    className='text-white text-4xl'
                    onClick={toggleSidebar}
                >
                    <GiHamburgerMenu />
                </button>
            </div>
            {isOpen && (
                <div className='fixed top-0 right-0 w-3/4 h-full bg-gradient-to-b from-[#343E4E] via-[#566781] to-[#6B7D9A] z-50 shadow-lg'>
                    <div className='p-4 flex justify-end items-center'>
                        <button
                            className='text-white text-4xl'
                            onClick={toggleSidebar}
                        >
                            <RxCross2 />
                        </button>
                    </div>
                    <ul className='flex flex-col gap-6 px-4'>
                        {session ? (
                            <>
                                <li>
                                    <Link href='/my-profile' onClick={handleLinkClick} className='text-xl'>My Profile</Link>
                                    <div className='bg-white h-0.5 mt-3'></div>
                                </li>
                                <li>
                                    <Link href='/my-trip' onClick={handleLinkClick} className='text-xl'>My Trip</Link>
                                    <div className='bg-white h-0.5 mt-3'></div>
                                </li>
                                <li>
                                    <button onClick={handleLogout} className='text-xl'>Logout</button>
                                    <div className='bg-white h-0.5 mt-3'></div>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href='/sign-in' onClick={handleLinkClick} className='text-xl'>Login</Link>
                                    <div className='bg-white h-0.5 mt-3'></div>
                                </li>
                                <li>
                                    <Link href='/sign-up' onClick={handleLinkClick} className='text-xl'>Signup</Link>
                                    <div className='bg-white h-0.5 mt-3'></div>
                                </li>
                            </>
                        )}
                        <li>
                            <Link href='/' onClick={handleLinkClick} className='text-xl'>Home</Link>
                            <div className='bg-white h-0.5 mt-3'></div>
                        </li>
                        <li>
                            <Link href='/about-us' onClick={handleLinkClick} className='text-xl'>About</Link>
                            <div className='bg-white h-0.5 mt-3'></div>
                        </li>
                        <li>
                            <Link href='/contact-us' onClick={handleLinkClick} className='text-xl'>Contact</Link>
                            <div className='bg-white h-0.5 mt-3'></div>
                        </li>
                        <li>
                            <Link href='/create-trip' onClick={handleLinkClick} className='text-xl'>Create Trip</Link>
                            <div className='bg-white h-0.5 mt-3'></div>
                        </li>
                        <li>
                            <Link href='/settings' onClick={handleLinkClick} className='text-xl'>Settings</Link>
                            <div className='bg-white h-0.5 mt-3'></div>
                        </li>
                        <li>
                            <Link href='/faq' onClick={handleLinkClick} className='text-xl'>FAQs</Link>
                            <div className='bg-white h-0.5 mt-3'></div>
                        </li>
                        <li>
                            <Link href='/troubleshoot' onClick={handleLinkClick} className='text-xl'>Troubleshoot</Link>
                            <div className='bg-white h-0.5 mt-3'></div>
                        </li>
                        <li>
                            <Link href='/privacy-policy' onClick={handleLinkClick} className='text-xl'>Privacy Policy</Link>
                            <div className='bg-white h-0.5 mt-3'></div>
                        </li>
                        <li>
                            <Link href='/help-center' onClick={handleLinkClick} className='text-xl'>Help Center</Link>
                            <div className='bg-white h-0.5 mt-3'></div>
                        </li>
                    </ul>
                </div>
            )}
            {showLogoutModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-gradient-to-b from-[#343E4E] via-[#566781] to-[#6B7D9A] px-6 py-8 w-80 h-auto rounded-lg shadow-lg flex flex-col justify-between">
                        <h2 className="text-xl font-bold mb-2 text-center">
                            Are you sure to logout?
                        </h2>
                        <div className="flex justify-between mt-4">
                            <button
                                className="bg-[#E88DEA] px-8 py-2 rounded-xl"
                                onClick={()=> signOut()}
                            >
                                Logout
                            </button>
                            <button
                                className="py-2 px-8 rounded-xl border-2 border-[#E88DEA]"
                                onClick={() => setShowLogoutModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileNavbar;