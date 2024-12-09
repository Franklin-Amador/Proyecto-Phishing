import { NextRequest, NextResponse } from 'next/server'
import prisma from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    console.log('Fetching users...')
    const users = await prisma.user.findMany()
    // console.log('Users found:', users)
    return NextResponse.json(users, { status: 200 })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ 
      error: "Internal Server Error", 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
}