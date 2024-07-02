// src/app/api/reviews/route.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const reviews = await prisma.review.findMany();
    res.status(200).json(reviews);
  } else if (req.method === 'POST') {
    const { name, rating, comment } = req.body;

    try {
      const newReview = await prisma.review.create({
        data: {
          name,
          rating,
          comment,
        },
      });

      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create review' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
