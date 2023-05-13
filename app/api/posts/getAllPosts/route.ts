import { currentUser } from '@clerk/nextjs/app-beta'
import { NextResponse } from 'next/server'
import db from '@/db'

export async function GET(request: Request) {
    const user = await currentUser();

    if(!user) {
        return new NextResponse('no user found');
    }

    try {
        const posts = await db.post.findMany({
            where: {
                userId: user.id,
            },
        });

        return new NextResponse(JSON.stringify(posts));
    } catch (error) {
        return new NextResponse('error');
    }    
}
