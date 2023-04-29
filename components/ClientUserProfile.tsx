"use client"
import { useRouter } from 'next/navigation'
import { UserProfile, SignOutButton } from '@clerk/nextjs'

export default function ClientUserProfile() {
    const router = useRouter()
    return (
        <div>
            <button className='p-4 bg-red-500'>
                <SignOutButton signOutCallback={() => router.push('/')}>
                    Sign out
                </SignOutButton>
            </button>
            <UserProfile />
        </div>
    );
}