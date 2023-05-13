"use client"
import { Fragment } from 'react'
import useSWR from 'swr'
import { Post as PostType } from '@/db'
import { fetcher } from '@/lib/utils'
import Post from '@/components/Post'
import PostForm from '@/components/PostForm'
import DeletePostButton from '@/components/DeletePostButton'

type PostsListProps = {
    initialPosts: PostType[]
}

function PostsList ({ initialPosts }: PostsListProps) {
    const { data, error, mutate } = useSWR('/api/posts/getAllPosts', fetcher, { fallbackData: initialPosts })

    return (
        <>
            <PostForm mutate={mutate} />
            {data?.map((post: PostType) => 
                <Fragment key={post.id}>
                    <Post post={post} />
                    <DeletePostButton mutate={mutate} id={post.id} />
                </Fragment>
            )}
        </>
    );    
}

export default PostsList