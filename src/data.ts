//feature section imports
import features1 from '@/assets/feature_section/feature1.png'
import features2 from '@/assets/feature_section/feature2.png'
import features3 from '@/assets/feature_section/feature3.png'
import features4 from '@/assets/feature_section/feature4.png'
import features5 from '@/assets/feature_section/feature5.png'
import features6 from '@/assets/feature_section/feature6.png'

//destination section
import destination1 from '@/assets/destination_section/kashmir.jpg'
import destination2 from '@/assets/destination_section/jaipur.jpg'
import destination3 from '@/assets/destination_section/delhi.jpg'
import destination4 from '@/assets/destination_section/mumbai.jpg'
import destination5 from '@/assets/destination_section/banaras.jpg'
import destination6 from '@/assets/destination_section/kolkata.jpg'
import destination7 from '@/assets/destination_section/manali.jpg'
import destination8 from '@/assets/destination_section/hyderabad.jpg'

//last section home
import last1 from '@/assets/last_section/last1.png'
import last2 from '@/assets/last_section/last2.png'
import last3 from '@/assets/last_section/last3.png'

//help page
import setting from '@/assets/help_page/setting.png'
import privacy from  '@/assets/help_page/privacy.png'
import faq from '@/assets/help_page/faq.png'
import troubleshoot from '@/assets/help_page/troubleshoot.png'




export const featureData = [
    {
        title: "Add places from guides with 1 click",
        description: "We crawled the web so you don’t have to. Easily save mentioned places.",
        imageUrl: features1,
    },
    {
        title: "Checklists for anything",
        description: "Stay organized with a packing list, to-do list, shopping list, any kind of list.",
        imageUrl: features2,
    },
    {
        title: "Get personalized suggestions",
        description: "Find the best places to visit with smart recommendations based on your itinerary.",
        imageUrl: features3,
    },
    {
        title: "Offline access",
        description: "No wifi, no problem. Your trip plans are locally downloaded for access anywhere.",
        imageUrl: features4,
    },
    {
        title: "Unlimited attachments",
        description: "Never dig through your emails again — access all your trip files and PDFs in one place.",
        imageUrl: features5,
    },
    {
        title: "Optimize your route",
        description: "Perfect for road trips and saving money on gas! Get the best route auto-rearranged.",
        imageUrl: features6,
    },
]

export const destinationData = [
    {
        id:1,
        imageUrl: destination1,
        title:'Srinagar,Kashmir'
    },
    {
        id:2,
        imageUrl: destination2,
        title:'Jaipur,Rajasthan'
    },
    {
        id:3,
        imageUrl: destination3,
        title:'Delhi,India'
    },
    {
        id:4,
        imageUrl: destination4,
        title:'Mumbai,Maharashtra'
    },
    {
        id:5,
        imageUrl: destination5,
        title:'Banaras, Uttar Pradesh'
    },
    {
        id:6,
        imageUrl: destination6,
        title:'Kolkata, West Bengal'
    },
    {
        id:7,
        imageUrl: destination7,
        title:'Manali, Himachal Pradesh'
    },
    {
        id:8,
        imageUrl: destination8,
        title:'Hyderabad, Telangana'
    },
]

export const homeLastData = [
    {
        title: "The best road trip planner",
        description: "Use Ashventure as a route map showing directions, distances, and driving times between different attractions you might want to visit.",
        imageUrl: last1,
    },
    {
        title: "The best vacation planner",
        description: "Use Ashventure to map your journey to figure out the best routes, keep track of hotel and flight bookings and reservations, and read guides from other trip planning websites.",
        imageUrl: last2,
    },
    {
        title: "The best group itinerary planner",
        description: "Use Ashventure to share your itinerary with tripmates, friends, and families and collaborate in real time, so everyone stays in the loop.",
        imageUrl: last3,
    },
]

export const missionData = [
    {
        title:'Authenticity',
        description:'We value genuine experiences, helping users discover destinations beyond the usual tourist spots for a deeper connection to local cultures.',
        link:'/about-us'
    },
    {
        title:'User-Centric Design',
        description:'We prioritize user experience by creating a platform that’s intuitive, accessible, and tailored to each traveler’s unique needs.',
        link:'/about-us'
    },
    {
        title:'Innovation',
        description:'We continually explore new technologies to simplify travel planning, making it engaging, flexible, and adaptable to future travel trends.',
        link:'/about-us'
    },
    {
        title:'Empowerment',
        description:'We empower travelers with tools to plan confidently, make informed choices, and customize journeys that align with their personal interests.',
        link:'/about-us'
    },
    {
        title:'Sustainability',
        description:'We support eco-friendly travel by promoting sustainable destinations and practices that respect the planet and local communities.',
        link:'/about-us'
    },
    {
        title:'Exploration',
        description:'Fostering a sense of wonder and inspiring curiosity, our mission is to ignite a passion for discovering, exploring, and embracing new destinations worldwide.',
        link:'/about-us'
    }
]

export const helpData = [
    {
        link: '/setting',
        image: setting,
        title: 'Settings',
        description: 'Access and adjust your account preferences, notification settings, and personal information to enhance your user experience'
    },
    {
        link: '/privacy-policy',
        image: privacy,
        title: 'Privacy & Security',
        description: 'Discover how we protect your data and learn about our privacy policies to ensure your information stays safe.'
    },
    {
        link: '/faq',
        image: faq,
        title: 'FAQs',
        description: 'Browse our comprehensive list of frequently asked questions to find quick answers to common inquiries and concerns'
    },
    {
        link: '/troubleshoot',
        image: troubleshoot,
        title: 'Troubleshoot',
        description: 'Explore our troubleshooting resources to resolve common issues and ensure a smooth experience on our platform.'
    }
]