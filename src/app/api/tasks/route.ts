import { prisma } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const user = await currentUser()

  const pageStr = request.nextUrl.searchParams.get('page')
  const limitStr = request.nextUrl.searchParams.get('limit')

  const page = pageStr ? parseInt(pageStr, 10) : 1
  const limit = limitStr ? parseInt(limitStr, 10) : 10
  const skip = (page - 1) * limit

  const tasks = await prisma.task.findMany({
    where: { userId: user?.id },
    skip,
    take: limit
  })

  const jsonResponse = {
    status: 'success',
    results: tasks.length,
    tasks
  }
  return NextResponse.json(jsonResponse)
}

export async function POST(request: Request) {
  try {
    const json = await request.json()

    const newTask = await prisma.task.create({
      data: json
    })

    // eslint-disable-next-line prefer-const
    let jsonResponse = {
      status: 'success',
      data: {
        newTask
      }
    }
    return new NextResponse(JSON.stringify(jsonResponse), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error: any) {
    if (error.code === 'P2002') {
      // eslint-disable-next-line prefer-const
      let errorResponse = {
        status: 'fail',
        message: 'Feedback with title already exists'
      }
      return new NextResponse(JSON.stringify(errorResponse), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // eslint-disable-next-line prefer-const
    let errorResponse = {
      status: 'error',
      message: error.message
    }
    return new NextResponse(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
