import { NextResponse } from 'next/server'
import db from '@/db'

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