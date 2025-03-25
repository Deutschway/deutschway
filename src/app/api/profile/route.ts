import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || 'secreto-super-seguro'

export async function GET(): Promise<NextResponse> {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('auth_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    }

    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string
      name: string
      email: string
    }

    return NextResponse.json({ user: decoded })
  } catch (err: unknown) {  
    return NextResponse.json({ error: 'Token inválido o expirado' }, { status: 401 })
  }
}