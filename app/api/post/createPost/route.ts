import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server'
import db from '@/db'

export async function POST(request: Request) {
    // @ts-ignore
    const { userId } = getAuth(request)

    // @ts-ignore
    const data = await request.json()

    if (!userId) {
        return new NextResponse('user not authenticated');
    }

    try {
        await db.post.create({
            data: {
                ...data,
                userId,
            },
        })
        return new NextResponse('ok');
    } catch (error) {
        console.log(error);
        return new NextResponse('error');
    }
}
