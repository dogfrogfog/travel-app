import ClientUserProfile from '@/components/ClientUserProfile'
import PostForm from '@/components/PostForm'

export default async function Profile() {
    return (
        <div className='h-screen'>
            <PostForm />
           <ClientUserProfile /> 
        </div>
    )
}