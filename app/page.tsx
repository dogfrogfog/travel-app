import db from '@/db'
import Post from '@/components/Post'
import Filters from '@/components/Filters'
import { Title } from '@/components/ui/title'

export default async function Home() {
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
      {allPosts.length && allPosts.map(post => <Post key={post.id} post={post} />)}
    </div>
  )
}

export const revalidate = 10;
