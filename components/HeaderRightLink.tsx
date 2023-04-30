"use client"
import { useUser, SignedIn } from "@clerk/nextjs";
import Link from "next/link"
import Image from "next/image"

export default function HeaderRightLink() {
    const { isSignedIn, user } = useUser();

    // console.log(user?.profileImageUrl && )

    return isSignedIn
        ? (
            <SignedIn>
                <Link href='/profile' className="block bg-yellow-200 rounded">
                    profile
                    {/* {user?.profileImageUrl && */}
                    {/* <Image
                        // src={user.profileImageUrl}
                        src={'https://www.gravatar.com/avatar?d=mp'}
                        alt="Profile image"
                        width={40}
                        height={40}
                        className="rounded-full cursor-pointer"
                    /> */}
                {/* } */}
                </Link>
            </SignedIn>
        )
        : (
            <Link href="/sign-in" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                Log in
            </Link>
        )
}
