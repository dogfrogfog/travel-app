import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '@/db'
import { Badge } from '@/components/ui/badge'

type PostProps = {
    post: Omit<Post, 'createdAt' | 'updatedAt'>;
}

export default function Post({ post }: PostProps) {
    return (
        <div className="relative mb-24 p-2 border-[1px] border-black flex">
            <div className='w-2/3'>
                <div className='absolute top-[-50px] left-[-50px] w-[150px] h-[150px] bg-white rounded-full border-[1px] border-black'>
                    avatar
                </div>
                <div className='ml-36 mb-12'>
                    <h3 className='text-3xl font-semibold'>
                        {post.title}
                    </h3>
                    {post.startDate || post.endDate ? (
                        <p className="mb-4">
                        Trip dates: 
                        {`from ${post?.startDate && format(new Date(post.startDate), 'dd.MM.yyyy')} `}
                        {post?.endDate && `to ${format(new Date(post.endDate), 'dd.MM.yyyy')} `}
                        </p>
                    ) : 'no clear dates'}
                </div>
                <div className=''>
                    {post.content}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatibus reiciendis quisquam! At tempore eius eveniet explicabo dolor sed minus, consectetur rerum? Ipsa commodi distinctio ad incidunt laudantium architecto totam!
                </div>
            </div>
            <div className='ml-12 pl-12 bg-amber-150 w-1/3 border-l-[1px] border-black'>
                <div className=''>
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
        </div>
    )
}