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

export async function DELETE(request: Request) {
    const id = parseInt(request.url.split('?id=')[1]);

    if(!id) {
        return new NextResponse('wrong id');
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

