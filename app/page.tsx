import { currentUser } from "@clerk/nextjs/app-beta"
import db from '@/db'
import Post from '@/components/Post'

export default async function Home() {
  const user = await currentUser();
  const allPosts = await db.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold mb-8">All Posts</h1>
        {allPosts.length && allPosts.map(post => <Post key={post.id} post={post} currentUserId={user?.id} />)}
      </div>
    </div>
  )
}
