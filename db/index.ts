import { PrismaClient } from '@prisma/client'
export * from '@prisma/client'

let prisma: PrismaClient

const prismaConfig = {
    log: [{ level: 'query', emit: 'event' }],
}

if (process.env.NODE_ENV === 'production') {
    // @ts-ignore
    prisma = new PrismaClient(prismaConfig)
} else {
    // Ensure the prisma instance is re-used during hot-reloading
    // Otherwise, a new client will be created on every reload
    // @ts-ignore
    globalThis['prisma'] = globalThis['prisma'] || new PrismaClient(prismaConfig)
    // @ts-ignore
    prisma = globalThis['prisma']
}

export default prisma
