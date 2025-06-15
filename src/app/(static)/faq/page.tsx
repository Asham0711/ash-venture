'use client'
import HighlightText from '@/components/HighlightText'
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FaqPage = () => {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    const toggleQuestion = (question: string) => {
        setOpenQuestion(openQuestion === question ? null : question);
    };
    return (
        <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden">
            <div className='w-full mt-1 bg-[#343E4E] md:px-6 px-2 py-10 flex justify-center items-center flex-col gap-4'>
                <h1 className='text-3xl md:text-4xl font-semibold text-center'>Have <HighlightText text='Questions' />? We&apos;ve Got Answers</h1>
                <p className='md:text-xl text-lg text-center md:w-9/12 mx-auto'>From planning your trip to making the most of every adventure, find clear answers to all your queries. Your journey starts here.</p>
            </div>   
            <div className="py-8 md:w-9/12 w-11/12 mx-auto rounded-lg">
                <h1 className='md:text-4xl text-2xl mb-10 text-center'><HighlightText text='Frequently Asked Questions(FAQs)' /></h1>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">1. Getting Started</h2>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q1-getting-started")}
                        >
                            Q1: How do I create an account on Ashventure?
                            <span>{openQuestion === "q1-getting-started" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q1-getting-started" && (
                            <p className="ml-4">
                            To create an account, click the Sign Up button on the top right corner of the homepage. Enter your name, email, and a secure password. After verifying your email, you&apos;re all set to explore the world with Ashventure! <br />
                            <strong>Tip:</strong> Check your inbox for a confirmation email to activate your account!
                            </p>
                        )}
                    </div>
                    <div className='bg-[#343E4E] h-0.5 mb-5'></div>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q2-getting-started")}
                        >
                            Q2: How does Ashventure&apos;s trip planning feature work?
                            <span>{openQuestion === "q2-getting-started" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q2-getting-started" && (
                            <p className="ml-4">
                                With Ashventure, you can create a personalized trip plan using our easy-to-use trip planner.
                                Click &apos;Create Trip&apos;, add your destinations, set travel dates, and include activities, restaurants, and 
                                accommodations. <br />
                                <strong>Tip:</strong> Try the drag-and-drop feature to rearrange your itinerary with ease!
                            </p>
                        )}
                    </div>
                </section>
                <div className='bg-[#343E4E] h-0.5 mb-10'></div>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">2. Trip Planning</h2>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q1-trip-planning")}
                        >
                            Q1:  Can I save multiple itineraries?
                            <span>{openQuestion === "q1-trip-planning" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q1-trip-planning" && (
                            <p className="ml-4">
                                Absolutely! Ashventure allows you to save multiple itineraries. After logging in, simply name each trip, and they&apos;ll be stored in your &apos;My Trips&apos; section for easy access. <br />
                                <strong>Qoute:</strong> Plan for now, and save a trip for later!
                            </p>
                        )}
                    </div>
                    <div className='bg-[#343E4E] h-0.5 mb-5'></div>

                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q2-trip-planning")}
                        >
                            Q2: How can I edit my trip details?
                            <span>{openQuestion === "q2-trip-planning" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q2-trip-planning" && (
                            <p className="ml-4">
                                To edit your trip, go to the My Trips section and select the trip you want to modify. You can update destinations, activities, and notes or change travel dates. Click the save button to save the changes <br />
                                <strong>Tip:</strong> Use the map view to quickly rearrange your destinations.
                            </p>
                        )}
                    </div>
                </section>
                <div className='bg-[#343E4E] h-0.5 mb-10'></div>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">3. Account & Profile Management</h2>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q1-account")}
                        >
                            Q1:  How can I change my password?
                            <span>{openQuestion === "q1-account" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q1-account" && (
                            <p className="ml-4">
                                Go to Settings &gt; Account Security and click Change Password. Enter your current password, followed by your new password, and save the changes. <br />
                                <strong>Tip:</strong> Use a mix of letters, numbers, and symbols for a strong password.
                            </p>
                        )}
                    </div>
                    <div className='bg-[#343E4E] h-0.5 mb-5'></div>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q2-account")}
                        >
                            Q2: What should I do if I forget my password?
                            <span>{openQuestion === "q2-account" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q2-account" && (
                            <p className="ml-4">
                                On the login page, click Forgot Password? Enter your registered email, and you&apos;ll receive an OTP which you should put that and follow the instructions to set a new password. <br />
                                <strong>Tip:</strong> If you don&apos;t receive the reset email, check your spam folder or contact support.
                            </p>
                        )}
                    </div>
                </section>
                <div className='bg-[#343E4E] h-0.5 mb-10'></div>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">4. Privacy & Security</h2>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q1-privacy")}
                        >
                            Q1:  How does Ashventure keep my personal data safe?
                            <span>{openQuestion === "q1-privacy" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q1-privacy" && (
                            <p className="ml-4">
                                We use advanced encryption and secure servers to protect your data. Our privacy policy ensures that your information is never shared without your consent. <br />
                                <strong>Tip:</strong> For more details you can visit <strong><Link href={'/privacy-policy'} className='text-[#F74270]'>Privacy Policy</Link></strong> page
                            </p>
                        )}
                    </div>
                    <div className='bg-[#343E4E] h-0.5 mb-5'></div>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q2-privacy")}
                        >
                            Q2: Does Ashventure use cookies?
                            <span>{openQuestion === "q2-privacy" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q2-privacy" && (
                            <p className="ml-4">
                                Yes, we use cookies to enhance your browsing experience and provide personalized recommendations. <br />
                                <strong>Tip:</strong> Review our <strong><Link href={'/privacy-policy'} className='text-[#F74270]'>Cookie Policy</Link></strong> for a detailed breakdown of how we use cookies
                            </p>
                        )}
                    </div>
                </section>
                <div className='bg-[#343E4E] h-0.5 mb-10'></div>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">5. Technical Support</h2>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q1-technical")}
                        >
                            Q1:  What should I do if Ashventure crashes?
                            <span>{openQuestion === "q1-technical" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q1-technical" && (
                            <p className="ml-4">
                                If the site crashes, try refreshing your browser. If the issue persists, clear your cache and cookies or use a different browser. For further help, contact our support team. <br />
                                <strong>Tip:</strong> Make sure you&apos;re using an updated browser for the best experience.
                            </p>
                        )}
                    </div>
                    <div className='bg-[#343E4E] h-0.5 mb-5'></div>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q2-technical")}
                        >
                            Q2: How can I report a bug?
                            <span>{openQuestion === "q2-technical" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q2-technical" && (
                            <p className="ml-4">
                                Head to <strong><Link href={'/help-center'} className='text-[#F74270]'>Help Center</Link></strong> &gt; Query Form and describe the issue in detail. Our team will work on resolving it as soon as possible. <br />
                                <strong>Tip:</strong> Write the issue in clear and crisp manner.
                            </p>
                        )}
                    </div>
                </section>
                <div className='bg-[#343E4E] h-0.5 mb-10'></div>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">6. Contact and Support</h2>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q1-contact")}
                        >
                            Q1:  What are Ashventure&apos;s customer support hours?
                            <span>{openQuestion === "q1-contact" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q1-contact" && (
                            <p className="ml-4">
                                Our support team is available 24/7 through live chat and email. You can also submit a request via the <strong><Link href={'/contact-us'} className='text-[#F74270]'>Contact Us</Link></strong> section on our website.
                            </p>
                        )}
                    </div>
                    <div className='bg-[#343E4E] h-0.5 mb-5'></div>
                    <div className="mb-4">
                        <button
                            className="flex justify-between w-full py-2 text-left"
                            onClick={() => toggleQuestion("q2-contact")}
                        >
                            Q2: Can I provide feedback about my experience?
                            <span>{openQuestion === "q2-contact" ? <IoIosArrowUp className='text-xl font-bold'/> : <IoIosArrowDown className='text-xl font-bold'/>}</span>
                        </button>
                        {openQuestion === "q2-contact" && (
                            <p className="ml-4">
                                Yes! Visit the Feedback section under <strong><Link href={'/contact-us'} className='text-[#F74270]'>Contact Us</Link></strong>, and let us know what you think. We value your opinions and use them to improve our platform. <br />
                                <strong>Qoute:</strong> Your voice helps us create better travel experiences for everyone.
                            </p>
                        )}
                    </div>
                </section>
                <div className='bg-[#343E4E] h-0.5 mb-10'></div>
            </div>  
        </div>
    )
}

export default FaqPage