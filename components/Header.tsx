import { UserButton, SignedOut, SignedIn } from "@clerk/nextjs/app-beta"
import Link from "next/link"
import { buttonVariants } from '@/components/ui/Button'

export default async function Header() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
        <div className="flex h-14 items-center px-4">
            <Link href="/" className="w-32 text-xl font-semibold bg-yellow-200">
                logo
            </Link>
            <div className="flex grow justify-end">
                <SignedOut>
                <Link href="/login" className={buttonVariants({ variant: "outline" })}>
                    login
                </Link>
                </SignedOut>
                <SignedIn>
                    <Link href="/profile" className="block bg-yellow-400">
                        profile
                    </Link>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </header>
  )
}