import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  // Establecemos la cookie con un valor vacío y con un maxAge de 0 para eliminarla
  const cookieStore = cookies()

  // Usamos NextResponse para establecer la cookie correctamente
  const response = NextResponse.json({ message: 'Sesión cerrada' })

  // Establecemos la cookie "auth_token" con un valor vacío y un maxAge de 0, lo que la elimina
  response.cookies.set('auth_token', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0, // Esto elimina la cookie
  })

  return response
}