import { currentUser } from "@clerk/nextjs/app-beta";
import { NextResponse } from 'next/server'
import db from '@/db'

export async function POST(request: Request) {
    const user = await currentUser();
    const data = await request.json()

    if (!user) {
        return new NextResponse('user not authenticated');
    }

    try {
        await db.post.create({
            data: {
                ...data,
                userId: user.id,
                authorDateOfBirth: user.publicMetadata?.dateOfBirth || null,
            },
        })
        return new NextResponse('ok');
    } catch (error) {
        console.log(error);
        return new NextResponse('error');
    }
}
