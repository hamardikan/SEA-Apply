// src/app/api/reservation/route.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, service, dateTime } = req.body;

    try {
      const reservation = await prisma.reservation.create({
        data: {
          name,
          phone,
          service,
          dateTime: new Date(dateTime),
        },
      });

      res.status(200).json(reservation);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create reservation' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
