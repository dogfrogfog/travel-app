import React from 'react'
import { currentUser } from "@clerk/nextjs/app-beta"
import PostForm from '@/components/PostForm'
import db, { Post } from '@/db'

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
            userId: user?.id,
        }
    })  
    
    return posts.map(post => 
        <React.Fragment key={post.id}>
            <PostCard post={post} />
        </React.Fragment>
    );    
}

function PostCard({ post }: { post: Post }) {
    return (
        <div className="w-3/4 m-auto bg-slate-200 mb-8 p-2 rounded">
            <h3 className="text-xl mb-4 bold">{post.title}</h3>
            <p className="mb-4">{post.content}</p>
            <div className='flex justify-start'>
                {['tag1', 'tag2', 'tag3', 'tag4'].map(v => (
                    <span key={v} className='py-2 px-4 bg-blue-400 border-2 border-slate-600 mr-4'>{v}</span>
                ))}
            </div>
            <span className='text-xs'>{post.userId}</span>
        </div>
    )
}