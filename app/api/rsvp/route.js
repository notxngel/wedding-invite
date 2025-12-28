import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const guests = await prisma.guest.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(guests);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener invitados' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, guests: guestCount, message } = body;

    if (!name || !guestCount) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
    }

    const newGuest = await prisma.guest.create({
      data: {
        name,
        guests: guestCount,
        message,
      },
    });

    return NextResponse.json({ success: true, guest: newGuest });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
