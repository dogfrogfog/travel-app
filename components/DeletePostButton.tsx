"use client"
import { Post } from '@/db'
import { SignedIn } from '@clerk/nextjs'

const deletePost = async (id: number) => {
    try {
        await fetch(`/api/post?id=${id}`, {
          method: 'DELETE',
      });
    } catch (error) {
        console.log(error)
    }
}

type DeletePostButtonProps = Pick<Post, 'id'> & {
    mutate: () => Promise<void>
};

export default function DeletePostButton({ id, mutate }: DeletePostButtonProps) {
    const onClick = async () => {
        await deletePost(id)

        await mutate()
    }

    return (
        <SignedIn>
            <button onClick={onClick} className='p-2 rounded bg-red-300 text-white'>Delete</button>
        </SignedIn>
    )
}