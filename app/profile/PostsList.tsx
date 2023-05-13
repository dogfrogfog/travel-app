"use client"
import { Fragment } from 'react'
import useSWR from 'swr'
import { Post as PostType } from '@/db'
import { fetcher } from '@/lib/utils'
import Post from '@/components/Post'
import PostForm from '@/components/PostForm'

type PostsListProps = {
    initialData: { posts: PostType[], userId: string }
}

function PostsList ({ initialData }: PostsListProps) {
    const { data, error, mutate } = useSWR('/api/posts/getAllPosts', fetcher, { fallbackData: initialData })

    return (
        <>
            <PostForm mutate={mutate} />
            {data.posts?.map((post: PostType) => 
                <Fragment key={post.id}>
                    <Post mutate={mutate} currentUserId={data.userId} post={post} />
                </Fragment>
            )}
        </>
    );    
}

export default PostsList