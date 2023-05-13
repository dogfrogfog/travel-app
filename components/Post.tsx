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
            <h3 className="text-xl mb-4 bold">{post.title}</h3>
            <p className="mb-4">{post.content}</p>
            {post.startDate || post.endDate ? (
                <p className="mb-4">
                {`from: ${post?.startDate && format(new Date(post.startDate), 'dd-MM')} `}
                {post?.endDate && `to: ${format(new Date(post.endDate), 'dd-MM')} `}
                </p>
            ) : 'no clear dates'}
            <div className='flex justify-start'>
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