import prisma from "@/lib/db"
import { revalidatePath } from 'next/cache'

export async function POST(request) {
  const res = await request.json()
  const data = await prisma.review.create({
    data: res
  })
  revalidatePath("/reviews")
  return Response.json({ data })
}