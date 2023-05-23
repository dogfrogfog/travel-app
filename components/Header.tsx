import Link from "next/link"

export default async function Header() {
  return (
    <header className="shadow-none container supports-backdrop-blur:bg-background/60 bg-amber-50 sticky top-0 z-40 w-full bg-background/30 shadow-sm backdrop-blur">
        <div className="flex h-14 justify-around items-center px-4">
            <Link className="uppercase" href={'/'}>
                Home
            </Link>
            <div className="border-r-[1px] border-stone-900 h-8"></div>
            <Link className="uppercase" href={'/chats'}>
                Chats
            </Link>
            <div className="border-r-[1px] border-stone-900 h-8"></div>
            <Link className="uppercase" href={'/newsline'}>
                Newsline
            </Link>
            <div className="border-r-[1px] border-stone-900 h-8"></div>
            <Link className="uppercase" href={'/profile'}>
                Profile
            </Link>
        </div>
    </header>
  )
}