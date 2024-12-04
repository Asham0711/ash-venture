'use client'
import Image from "next/image";
import home from '@/assets/home.png'
import man from '@/assets/man.png'
import HighlightText from "@/components/HighlightText";
import { IoCall } from "react-icons/io5";
import { useRouter } from "next/navigation";
import FeatureCard from "@/components/HomePage/FeatureCard";
import { destinationData, featureData, homeLastData } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Button } from "@/components/ui/moving-border";
import LastCard from "@/components/HomePage/LastCard";

export default function Home() {
  const router = useRouter();
  return (
    <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={home}
          alt="Home"
          className="min-w-screen w-full h-full object-cover mt-1 z-[-50]"
        />
        <Image
          src={man}
          alt="Man"
          className="absolute top-0 h-full w-32 md:w-80"
        />
        <div className="absolute right-2 sm:right-16 md:right-10 bottom-2 sm:bottom-20 md:bottom-12 text-left">
          <p className="text-lg sm:text-5xl md:text-6xl text-black font-bold">
            A <HighlightText text="Trip Planner" />
            <br /> for everyone...
          </p>
          <p className="text-[#2d2d2d] text-xs sm:text-xl md:text-2xl mt-2">
            Create your itinerary and map your next trip <br />
            in a free travel app for vacation planning <br />
            & road trips, powered by AI and Google Maps.
          </p>
          <div className="w-full sm:w-9/12 mt-5 flex flex-wrap gap-4 justify-start items-center">
            <button
              className="bg-[#E88DEA] px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-xl"
              onClick={() => router.push('/sign-in')}
            >
              Get Started
            </button>
            <button
              className="bg-[#FBE2FB] text-[#E88DEA] px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-xl flex justify-center items-center gap-2"
              onClick={() => router.push('/contact-us')}
            >
              <IoCall />
              Contact
            </button>
          </div>
        </div>
      </div>
      {/* Feature Section  */}
      <div className="max-w-screen container mx-auto p-4 overflow-x-hidden mt-4">
        <h2 className="text-lg md:text-4xl font-semibold text-center mb-4">
          <HighlightText text="Features" /> to replace all your other tools
        </h2>
        <div className='bg-[#E88DEA] w-[10%] h-0.5 mx-auto md:mb-4'></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 justify-center md:p-4 w-11/12 mx-auto">
          {featureData.map((card, index) => (
            <FeatureCard
              key={index} // Using index as key since the card data is static
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
      {/* Destination Section  */}
      <div className="max-w-screen container mx-auto p-4 overflow-x-hidden mt-4 bg-[#343E4E]">
        <h2 className="text-lg md:text-4xl font-semibold text-center my-5">
          Discover your next <HighlightText text="Favourite Destination" />
        </h2>
        <div className='bg-[#E88DEA] w-[10%] h-0.5 mx-auto mb-5'></div>
        <p className="md:w-9/12 mx-auto text-center text-xs md:text-xl">From breathtaking landscapes to vibrant cities, let us guide you to unforgettable destinations. Discover, plan, and explore your next favorite spot with personalized itineraries crafted just for you.</p>
        <div className="py-10 rounded-md flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={destinationData}
            direction="right"
            speed="slow"
          />
        </div>
        <p className="md:w-9/12 mx-auto text-center text-xs md:text-xl">Ready to turn your dream destinations into reality? Dive into expertly curated itineraries and start planning the journey of a lifetime.</p>
        <div className="flex justify-center items-center my-5">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-[#E88DEA] text-black dark:text-white border-neutral-200 dark:border-slate-800 text-lg"
            onClick={()=> router.push('/sign-up')}
          >
            Explore More
          </Button>
        </div>       
      </div>
      {/* Last Section */}
      <div className="max-w-screen container mx-auto p-4 overflow-x-hidden mt-4">
        <h2 className="text-lg md:text-4xl font-semibold text-center mb-4">
          For every kind of trip and every <HighlightText text="destination" />
        </h2>
        <div className='bg-[#E88DEA] w-[10%] h-0.5 mx-auto mb-5'></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 justify-center md:p-4 w-11/12 mx-auto">
          {homeLastData.map((card, index) => (
            <LastCard
              key={index} // Using index as key since the card data is static
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
