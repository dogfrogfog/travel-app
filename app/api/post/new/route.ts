import { NextResponse } from 'next/server'
import db from '@/db'

export async function POST(request: Request) {
    const data = await request.json()

    try {
        await db.post.create({
            data,
        })
    } catch (error) {
        return new NextResponse('error');
    }
    
    return new NextResponse('ok');
}
