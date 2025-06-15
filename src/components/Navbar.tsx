'use client';
import React, { useState } from 'react';
import logo from '@/assets/logo_full.png';
import Image from 'next/image';
import Link from 'next/link';
import profile from '@/assets/profile.png'
import { usePathname, useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { IoIosArrowDown, IoIosArrowUp, IoMdSettings } from 'react-icons/io';
import { TbLogout } from 'react-icons/tb';

const navLink = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about-us' },
    { title: 'Contact', path: '/contact-us' },
    { title: 'Create Trip', path: '/create-trip' },
];

const Navbar = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLinkClick = () => {
        setDropdownOpen(false); // Close the dropdown
    };

    const handleProfileClick = () => {
        setProfileDropdownOpen(!profileDropdownOpen);
    };

    const handleLogout = () => {
        setProfileDropdownOpen(!profileDropdownOpen);
        setShowLogoutModal(true);
    }

    return (
        <div className='w-full flex justify-between items-center px-6 py-4 shadow-md shadow-gray-400'>
            <div className='flex justify-center items-center'>
                <Image src={logo} width={200} height={200} alt="Logo" />
            </div>
            <div>
                <ul className='flex gap-8'>
                    {navLink.map((link) => (
                        <li key={link.title}>
                            <Link
                                href={link.path}
                                className={`${
                                    pathname === link.path ? 'text-[#F74270]' : 'text-white'
                                } hover:text-[#F74270] transition-all duration-300`}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                    {/* Dropdown Link */}
                    <li className='relative z-[100]'>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className='flex justify-center items-center hover:text-[#F74270] transition-all duration-300'
                        >
                            Others{' '}
                            {dropdownOpen ? (
                                <IoIosArrowUp className='text-xl font-bold' />
                            ) : (
                                <IoIosArrowDown className='text-xl font-bold' />
                            )}
                        </button>
                        {dropdownOpen && (
                            <ul className='absolute right-0 top-10 bg-[#161d29] px-8 py-4 rounded shadow-lg w-[200px] space-y-4'>
                                <li className='hover:text-[#F74270]'>
                                    <Link href='/faq' onClick={handleLinkClick}>
                                        FAQ
                                    </Link>
                                </li>
                                <li className='hover:text-[#F74270]'>
                                    <Link href='/troubleshoot' onClick={handleLinkClick}>
                                        Troubleshoot
                                    </Link>
                                </li>
                                <li className='hover:text-[#F74270]'>
                                    <Link href='/privacy-policy' onClick={handleLinkClick}>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className='hover:text-[#F74270]'>
                                    <Link href='/help-center' onClick={handleLinkClick}>
                                        Help Center
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className='flex gap-5'>
                {session ? (
                    <>
                        {/* Profile Image with Dropdown */}
                        <div className='relative'>
                            <div className='flex items-center justify-center gap-8'>
                                <Link href={'/my-trips'} className={`${
                                        pathname === '/my-trips' ? 'text-[#F74270]' : 'text-white'
                                    } hover:text-[#F74270] transition-all duration-300`}>My Trips</Link>
                                <Image
                                    src={profile} // Use session user image or a default one
                                    alt="Profile Picture"
                                    width={30}
                                    height={30}
                                    className='rounded-full cursor-pointer'
                                    onClick={handleProfileClick}
                                />
                            </div>
                            {profileDropdownOpen && (
                                <ul className='absolute right-0 bg-[#161d29] rounded-md z-[50] shadow-md mt-2 w-40'>
                                    <li>
                                        <button
                                            onClick={() => {
                                                router.push('/settings')
                                                setProfileDropdownOpen(!profileDropdownOpen);
                                            }}
                                            className='flex justify-center items-center gap-2 w-full px-4 py-2 text-white'
                                        >
                                            <IoMdSettings />
                                            Settings
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className='flex justify-center items-center gap-2 w-full px-4 py-2 text-white'
                                        >
                                            <TbLogout />
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            className='px-3 py-1 rounded-xl'
                            onClick={() => router.push('/sign-in')}
                        >
                            Login
                        </button>
                        <button
                            className='bg-[#F74270] px-4 py-2 rounded-xl'
                            onClick={() => router.push('/sign-up')}
                        >
                            Signup
                        </button>
                    </>
                )}
            </div>
            {showLogoutModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-gradient-to-b from-[#343E4E] via-[#566781] to-[#6B7D9A] px-6 py-8 w-80 h-auto rounded-lg shadow-lg flex flex-col justify-between">
                        <h2 className="text-xl font-bold mb-2 text-center">
                            Are you sure to logout?
                        </h2>
                        <div className="flex justify-between mt-4">
                            <button
                                className="bg-[#F74270] px-8 py-2 rounded-xl"
                                onClick={()=> signOut()}
                            >
                                Logout
                            </button>
                            <button
                                className="py-2 px-8 rounded-xl border-2 border-[#F74270]"
                                onClick={() => setShowLogoutModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;