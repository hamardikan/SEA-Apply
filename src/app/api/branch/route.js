import prisma from "@/lib/db"
import { revalidatePath } from 'next/cache'

export async function POST(request) {
    const res = await request.json()
    const o = new Date()
    o.setHours(res.openingTime.split(':')[0])
    o.setMinutes(res.openingTime.split(':')[1])
    o.setMilliseconds(0)

    const c = new Date()
    c.setHours(res.closingTime.split(':')[0])
    c.setMinutes(res.closingTime.split(':')[1])
    c.setMilliseconds(0)

    const data = await prisma.branch.create({
        data: {
            ...res,
            openingTime: o,
            closingTime: c
        }
    })
    revalidatePath("/dashboard/admin/branches")
    return Response.json({ data })
}