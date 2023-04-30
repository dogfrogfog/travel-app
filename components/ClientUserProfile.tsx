"use client"
import { useRouter } from 'next/navigation'
import { UserProfile, SignOutButton } from '@clerk/nextjs'

export default function ClientUserProfile() {
    const router = useRouter()
    return (
        <div>
                <SignOutButton signOutCallback={() => router.push('/')}>
                    <span className='block p-4 bg-red-500 mb-12 '>
                        Sign out
                    </span>    
                </SignOutButton>
            <UserProfile />
        </div>
    );
}