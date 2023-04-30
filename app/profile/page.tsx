import React from 'react'
import { currentUser } from "@clerk/nextjs/app-beta"
import PostForm from '@/components/PostForm'
import Post from '@/components/Post'
import db from '@/db'

export default async function Profile() {
    return (
        <div className='h-screen'>
            <PostForm />
            {/* @ts-ignore */}
            <CurrentUserPosts />
        </div>
    )
}

async function CurrentUserPosts() {
    const user = await currentUser();

    if(!user?.id) {
        return null;
    }

    const posts = await db.post.findMany({
        where: {
            userId: user.id,
        }
    })  

    return posts.map(post => 
        <React.Fragment key={post.id}>
            <Post currentUserId={user.id} post={post} />
        </React.Fragment>
    );    
}
