import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const task = await prisma.task.findUnique({
    where: {
      id
    }
  })

  if (!task) {
    const errorResponse = {
      status: 'fail',
      message: 'No Feedback with the Provided ID Found'
    }
    return new NextResponse(JSON.stringify(errorResponse), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const jsonResponse = {
    status: 'success',
    data: {
      task
    }
  }
  return NextResponse.json(jsonResponse)
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    await prisma.task.delete({
      where: { id }
    })

    return new NextResponse(null, { status: 204 })
  } catch (error: any) {
    if (error.code === 'P2025') {
      const errorResponse = {
        status: 'fail',
        message: 'No Feedback with the Provided ID Found'
      }
      return new NextResponse(JSON.stringify(errorResponse), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const errorResponse = {
      status: 'error',
      message: error.message
    }
    return new NextResponse(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    const json = await request.json()

    const updatedTask = await prisma.task.update({
      where: { id },
      data: json
    })

    const jsonResponse = {
      status: 'success',
      data: {
        task: updatedTask
      }
    }
    return NextResponse.json(jsonResponse)
  } catch (error: any) {
    if (error.code === 'P2025') {
      const errorResponse = {
        status: 'fail',
        message: 'No Feedback with the Provided ID Found'
      }
      return new NextResponse(JSON.stringify(errorResponse), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const errorResponse = {
      status: 'error',
      message: error.message
    }
    return new NextResponse(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
