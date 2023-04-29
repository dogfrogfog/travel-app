"use client"
import { useUser } from "@clerk/nextjs";
import Link from "next/link"
import Image from "next/image"

export default function HeaderRightLink() {
    const { isSignedIn, user } = useUser();

    return isSignedIn
        ? (
            <Link href='/profile'>
                <Image
                    src={user?.profileImageUrl}
                    alt="Profile image"
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                />
            </Link>
        )
        : (
            <Link href="/sign-in" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                Log in
            </Link>
        )
}
