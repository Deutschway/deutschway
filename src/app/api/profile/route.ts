import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || 'secreto-super-seguro'

// Usamos el tipo correcto para el retorno de la función `GET`
export async function GET(): Promise<NextResponse> {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('auth_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    }

    // Decodificamos el token y le indicamos explícitamente el tipo del decoded
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string
      name: string
      email: string
    }

    return NextResponse.json({ user: decoded })
  } catch (err: any) {  // Aquí usamos `any` para el error, pero puedes usar `unknown` si prefieres mayor seguridad
    return NextResponse.json({ error: 'Token inválido o expirado' }, { status: 401 })
  }
}