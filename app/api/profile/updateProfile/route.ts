import { clerkClient, auth } from '@clerk/nextjs/app-beta'
import { NextResponse } from 'next/server'

export async function PUT(request: Request) {
    const { userId } = auth();

    if(!userId) {
        return new NextResponse('no user found')
    }

    const data = await request.json()
    const user = await clerkClient.users.updateUser(userId, { publicMetadata: data })   

    return new NextResponse(JSON.stringify(user))
}
