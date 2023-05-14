import { clerkClient, auth } from '@clerk/nextjs/app-beta'
import { NextResponse } from 'next/server'

export async function PUT(request: Request) {
    const data = await request.json()

    const { userId } = auth();

    if(!userId) {
        return new NextResponse('no user found');
    }

    const user = await clerkClient.users.updateUser(userId, { publicMetadata: data });    

    console.log(user)

    return new NextResponse(JSON.stringify(user));
}
