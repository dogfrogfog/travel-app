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

    const filteredPosts = allPosts
        .filter(v => filters?.title ? v.title.toLowerCase().includes(filters.title.toLowerCase()) : true)
        .filter(v => filters?.tripDateRange?.from && v.startDate ? v.startDate >= filters.tripDateRange.from : true)
        .filter(v => filters?.tripDateRange?.to && v.endDate ? v.endDate <= filters.tripDateRange.to : true)
        .filter(v => filters?.ageFrom && v.authorDateOfBirth ? differenceInCalendarYears(v.authorDateOfBirth, new Date()) >= filters.ageFrom : true)
        .filter(v => filters?.ageTo && v.authorDateOfBirth ? differenceInCalendarYears(v.authorDateOfBirth, new Date()) <= filters.ageTo : true)

    return (
        <div className='w-4/5 m-auto'>
            <Filters filters={filters} setFilters={setFilters} />
            <div className='mt-24'>
                <div className='flex justify-end mb-4'>
                    <span className='font-bold text-xl'>Latest</span>
                </div>
                {filteredPosts.map(post => <Post key={post.id} post={post} />)}
            </div>
        </div>
    )
}
