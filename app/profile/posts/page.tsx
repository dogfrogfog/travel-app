import React from 'react'
import { currentUser } from "@clerk/nextjs/app-beta"
import db from '@/db'

import PostsList from '../PostsList'

export default async function Profile() {
    return (
        <div className='h-screen'>
            {/* @ts-ignore */}
            {/* <Avatar /> */}
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

    return (
        <> 

            <PostsList initialPosts={posts}  />
        </>
    );
    }
