import { currentUser } from "@clerk/nextjs/app-beta"
import db from '@/db'
import Post from '@/components/Post'
import Filters from '@/components/Filters'
import Title from '@/components/ui/Title'

export default async function Home() {
  const user = await currentUser();
  const allPosts = await db.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div>
      <Title>filters</Title>
      <Filters />
      <Title>all posts</Title>
      {allPosts.length && allPosts.map(post => <Post key={post.id} post={post} currentUserId={user?.id} />)}
    </div>
  )
}
