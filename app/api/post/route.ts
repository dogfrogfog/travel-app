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

// only logged in users can update posts
// todo: should add auth to delete request 
export async function DELETE(request: Request) {
    // @ts-ignore
    const { userId } = getAuth(request)

    if(!userId) {
        return new NextResponse('user not authenticated');
    }

    // @ts-ignore
    const id = parseInt(request?.url?.split('?id=')[1]);

    if(!id && !userId) {
        return new NextResponse('cant update');
    }

    try {
        await db.post.delete({
            where: {
                id,
            },
        })
        return new NextResponse('post deleted');
    } catch (error) {
        return new NextResponse('error');
    }
}

