import { currentUser, SignIn } from '@clerk/nextjs/app-beta'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ListMenu from './ListMenu'

export function TypographyH1({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
          {children}
        </h1>
      )
  }

export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
    const user = await currentUser();

    return user ? (
        <div className='flex p-12'>
            <div className='w-48 mr-12'>
                <Avatar className="w-48 h-48 mb-4">
                    <AvatarImage src={user?.profileImageUrl} alt="avatar" />
                    <AvatarFallback>{user?.firstName}</AvatarFallback>
                </Avatar>
                <ListMenu />
            </div>
            <div>
                <TypographyH1>
                    Hey, {user?.firstName}!
                </TypographyH1>
                {children}
            </div>
        </div>
    ) : <SignIn signUpUrl='/sign-up' />;
}