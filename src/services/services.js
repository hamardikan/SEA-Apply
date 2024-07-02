import prisma from "@/lib/db"

export async function getServices() {
    const data = await prisma.service.findMany()
    return data
}