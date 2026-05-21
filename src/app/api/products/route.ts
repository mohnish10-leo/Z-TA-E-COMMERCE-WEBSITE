import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      tagline: true,
      description: true,
      image: true
    }
  })
  return NextResponse.json(products)
}
