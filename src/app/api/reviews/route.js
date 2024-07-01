import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  const reviews = await prisma.review.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return NextResponse.json(reviews);
}

export async function POST(request) {
  const { name, rating, comment } = await request.json();
  const review = await prisma.review.create({
    data: { name, rating, comment },
  });
  return NextResponse.json(review);
}
