"use client"
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { Post as PostType } from '@/db'
import Post from '@/components/Post'
import Filters from '@/components/Filters'
import { Title } from '@/components/ui/title'

type FiltersWithPostsProps = {
    allPosts: PostType[]
}


export default function FiltersWithPosts({ allPosts }: FiltersWithPostsProps) {
    const [filters, setFilters] = useState<undefined | { title?: string; dateRange?: DateRange }>();

    const filteredPosts = allPosts
        .filter(v => filters?.title ? v.title.toLowerCase().includes(filters.title.toLowerCase()) : true)
        .filter(v => filters?.dateRange?.from && v.startDate ? v.startDate >= filters.dateRange.from : true)
        .filter(v => filters?.dateRange?.to && v.endDate ? v.endDate <= filters.dateRange.to : true)

    return (
        <div>
            <Title>Filters</Title>
            <Filters filters={filters} setFilters={setFilters} />
            <Title>all posts</Title>
            {filteredPosts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}
