import prisma from "@/lib/db"
import { revalidatePath } from 'next/cache'

export async function POST(request) {
    const res = await request.json()
    const data = await prisma.service.create({
        data: res
    })
    revalidatePath("/dashboard/admin")
    revalidatePath("/reservation")
    return Response.json({ data })
}