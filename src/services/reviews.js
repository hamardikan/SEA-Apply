import prisma from "@/lib/db"

export async function getReviews() {
    const data = await prisma.review.findMany()
    return data
}