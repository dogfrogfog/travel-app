import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import db from '@/db'

export async function POST(request: Request) {
    const data = await request.json()

    try {
        await db.post.create({
            data,
        })
    } catch (error) {
        console.log(error);
        return new NextResponse('error');
    }
    
    return new NextResponse('ok');
}

// only logged in users can update posts
// todo: should add auth to delete request 
export async function DELETE(request: Request) {
    const { user } = auth()
    const id = parseInt(request.url.split('?id=')[1]);

    if(!id && !user) {
        return new NextResponse('cant update');
    }

    try {
        await db.post.delete({
            where: {
                id,
            },
        })
    } catch (error) {
        return new NextResponse('error');
    }
    
    return new NextResponse('ok');
}

