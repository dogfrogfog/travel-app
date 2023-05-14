import ProfileForm from "./ProfileForm";
import { currentUser } from '@clerk/nextjs/app-beta'

export default async function Page() {
    const user = await currentUser()

    return (
        <ProfileForm dateOfBirth={user?.publicMetadata?.dateOfBirth as (Date | undefined)} />
    )
}