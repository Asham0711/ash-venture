/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import HighlightText from '@/components/HighlightText'
import DeleteForm from '@/components/SettingsPage/DeleteForm'
import EmailForm from '@/components/SettingsPage/EmailForm'
import PasswordForm from '@/components/SettingsPage/PasswordForm'
import Profile from '@/components/SettingsPage/Profile'
import ProfileForm from '@/components/SettingsPage/ProfileForm'
import { Spotlight } from '@/components/ui/Spotlight'

const SettingsPage = () => {
    return (
        <div className="max-w-screen min-h-screen container mx-auto overflow-x-hidden">
            <Spotlight
                className="left-0 md:left-60 md:top-56 top-0"
                fill="#F74270"
            />
            {/* Hero */}
            <div className='w-full mt-1 md:px-6 px-2 py-10 flex justify-center items-center flex-col gap-4'>
                <h1 className='text-3xl md:text-4xl font-semibold text-center'><HighlightText text='Settings' /></h1>
                <p className='md:text-xl text-lg text-center md:w-10/12 mx-auto'>Customize your experience by adjusting your account, privacy, notifications, and other preferences. Manage your personal information, update your password, control notification settings, and more to ensure everything is tailored to your needs. Keep your account secure and personalize your trip planning journey with ease!</p>
            </div>
            {/* Profile */}
            <Profile />
            {/* Profile Update */}
            <ProfileForm />
            {/* Email Update */}
            <EmailForm />
            {/* Password Change */}
            <PasswordForm />
            {/* Delete User */}
            <DeleteForm />
        </div>
    )
}

export default SettingsPage