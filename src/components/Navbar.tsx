'use client'
import React from 'react'
import logo from '@/assets/logo_full.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/moving-border'

const navLink = [
    {
        title:'Home',
        path:'/',
    },
    {
        title:'About',
        path:'/about-us',
    },
    {
        title:'Contact',
        path:'/contact-us',
    },
    {
        title:'Create trip',
        path:'/create-trip',
    }
]

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div className='w-full flex justify-between items-center px-6 py-4 shadow-md shadow-gray-400'>
            <div className='flex justify-center items-center'>
                <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                />
            </div>
            <div>
                <ul className='flex gap-8'>
                    {navLink.map((link) => (
                        <li key={link.title}>
                            <Link href={link.path} className={`${pathname == link.path ? 'text-[#E88DEA]' : 'text-white'} hover:text-[#E88DEA] transition-all duration-300`}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex gap-5'>
                <button className='px-3 py-1 rounded-xl' onClick={()=> router.push('/sign-in')}>
                    Login
                </button>
                
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-[#E88DEA] text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    onClick={()=> router.push('/sign-up')}
                >
                    Signup
                </Button>
                
            </div>
        </div>
    )
}

export default Navbar