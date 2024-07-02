import prisma from "@/lib/db"

export async function getBranches() {
    const data = await prisma.branch.findMany()
    return data
}