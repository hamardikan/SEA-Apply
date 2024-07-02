import prisma from "@/lib/db"
import { revalidatePath } from 'next/cache'

export async function POST(request) {
  const res = await request.json()
  const data = await prisma.reservation.create({
    data: res
  })
  revalidatePath("/reservation")
  return Response.json({ data })
}