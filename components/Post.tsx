import { Post } from '@/db'

type PostProps = {
    post: Pick<Post, 'title' | 'content' | 'userId'>;
    currentUserId?: string;
}

export default function Post({ currentUserId, post }: PostProps) {
    return (
        <div className="w-3/4 m-auto bg-slate-200 mb-8 p-2 rounded">
            <h3 className="text-xl mb-4 bold">{post.title}</h3>
            <p className="mb-4">{post.content}</p>
            <div className='flex justify-start mb-4'>
                {['tag1', 'tag2', 'tag3', 'tag4'].map(v => (
                    <span key={v} className='py-2 px-4 bg-blue-400 border-2 border-slate-600 mr-4'>{v}</span>
                ))}
            </div>
            {currentUserId === post.userId && (
                <button className='p-2 rounded bg-red-300 text-white'>Delete</button>
            )}
        </div>
    )
}