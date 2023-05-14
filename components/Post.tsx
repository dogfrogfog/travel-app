import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '@/db'
import { Badge } from '@/components/ui/badge'

type PostProps = {
    post: Omit<Post, 'createdAt' | 'updatedAt'>;
}

export default function Post({ post }: PostProps) {
    return (
        <div className="bg-slate-200 mb-4 p-2 rounded">
            <h3 className="text-xl mb-4 bold">Trip title: {post.title}</h3>
            <p className="mb-4">Trip description: {post.content}</p>
            {post.startDate || post.endDate ? (
                <p className="mb-4">
                Trip dates: 
                {`from ${post?.startDate && format(new Date(post.startDate), 'dd.MM.yyyy')} `}
                {post?.endDate && `to ${format(new Date(post.endDate), 'dd.MM.yyyy')} `}
                </p>
            ) : 'no clear dates'}
            <div className='flex justify-start'>
                Trip tags:
                {['travel', 'hike', 'wine', 'discussions'].map(tag => (
                    <Badge key={tag} className='mr-2'>
                        <Link href={`/tags/${tag}`}>
                            {tag}
                        </Link>
                    </Badge>
                ))}
            </div>
        </div>
    )
}