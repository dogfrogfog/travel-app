"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function ListMenu() {
    const pathname = usePathname()

    return (
        <div className='flex flex-col'>
            <Button
                asChild
                variant="ghost"
                className={cn('flex-right mb-2', pathname === '/profile' && 'bg-accent')}
                >
                <Link href="/profile">
                    Profile
                </Link>
            </Button>
            <Button
                asChild
                variant="ghost"
                className={cn('flex-right mb-2', pathname === '/profile/posts' && 'bg-accent')}
            >
                <Link href="/profile/posts">
                    Posts
                </Link>
            </Button>
        </div>
    )
}
