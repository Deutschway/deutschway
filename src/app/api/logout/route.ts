import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  cookies().set('auth_token', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0,
  })

  return NextResponse.json({ message: 'Sesión cerrada' })
}