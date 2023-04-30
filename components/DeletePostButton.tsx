"use client"
import { Post } from '@/db'

const deletePost = async (id: number) => {
    try {
        await fetch(`/api/post?id=${id}`, {
          method: 'DELETE',
      });
    } catch (error) {
        console.log(error)
    }
}

type DeletePostButtonProps = Pick<Post, 'id'>;

export default function DeletePostButton({ id }: DeletePostButtonProps) {
    const onClick = async () => {
        await deletePost(id);
    }

    return (
        <button onClick={onClick} className='p-2 rounded bg-red-300 text-white'>Delete</button>
    )
}