import { Post } from '@/db'
import DeletePostButton from '@/components/DeletePostButton'

type PostProps = {
    post: Omit<Post, 'createdAt' | 'updatedAt'>;
    currentUserId?: string;
}

export default function Post({ currentUserId, post }: PostProps) {
    return (
        <div className="bg-slate-200 mb-4 p-2 rounded">
            <h3 className="text-xl mb-4 bold">{post.title}</h3>
            <p className="mb-4">{post.content}</p>
            <div className='flex justify-start mb-4'>
                {['tag1', 'tag2', 'tag3', 'tag4'].map(v => (
                    <span key={v} className='py-2 px-4 bg-blue-400 border-2 border-slate-600 mr-4'>{v}</span>
                ))}
            </div>
            {currentUserId === post.userId && (
                <DeletePostButton id={post.id} />
            )}
        </div>
    )
}