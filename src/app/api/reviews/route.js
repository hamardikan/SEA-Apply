import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Review from '@/models/Review';

export async function GET() {
  await dbConnect();
  const reviews = await Review.find({}).sort({ createdAt: -1 });
  return NextResponse.json(reviews);
}

export async function POST(request) {
  const { name, rating, comment } = await request.json();
  await dbConnect();
  const review = await Review.create({ name, rating, comment });
  return NextResponse.json(review);
}