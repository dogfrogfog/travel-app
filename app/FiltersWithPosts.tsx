"use client"
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { differenceInCalendarYears } from 'date-fns'
import { Post as PostType } from '@/db'
import Post from '@/components/Post'
import Filters from '@/components/Filters'
import { Title } from '@/components/ui/title'

type FiltersWithPostsProps = {
    allPosts: PostType[]
}

export default function FiltersWithPosts({ allPosts }: FiltersWithPostsProps) {
    const [filters, setFilters] = useState<undefined | { title?: string; tripDateRange?: DateRange, ageFrom?: number, ageTo?: number }>();

    console.log(filters?.ageFrom, differenceInCalendarYears(allPosts[0].authorDateOfBirth, new Date()))
    console.log(filters?.ageTo, differenceInCalendarYears(allPosts[0].authorDateOfBirth, new Date()))

    const filteredPosts = allPosts
        .filter(v => filters?.title ? v.title.toLowerCase().includes(filters.title.toLowerCase()) : true)
        .filter(v => filters?.tripDateRange?.from && v.startDate ? v.startDate >= filters.tripDateRange.from : true)
        .filter(v => filters?.tripDateRange?.to && v.endDate ? v.endDate <= filters.tripDateRange.to : true)
        .filter(v => filters?.ageFrom && v.authorDateOfBirth ? differenceInCalendarYears(v.authorDateOfBirth, new Date()) >= filters.ageFrom : true)
        .filter(v => filters?.ageTo && v.authorDateOfBirth ? differenceInCalendarYears(v.authorDateOfBirth, new Date()) <= filters.ageTo : true)

    return (
        <div>
            <Title>Filters</Title>
            <Filters filters={filters} setFilters={setFilters} />
            <Title>all posts</Title>
            {filteredPosts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}
