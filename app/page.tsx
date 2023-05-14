import db from '@/db'
import FiltersWithPosts from './FiltersWithPosts'

export default async function Home() {
  const allPosts = await db.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div>
      <FiltersWithPosts allPosts={allPosts} />
    </div>
  )
}

export const revalidate = 30;
