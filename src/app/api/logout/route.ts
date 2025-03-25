import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  // Establecemos la cookie con un valor vacío y con un maxAge de 0 para eliminarla
  const cookieStore = cookies()
  cookieStore.set('auth_token', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0, // Esto elimina la cookie
  })

  // Retornamos una respuesta confirmando que la sesión se cerró
  return NextResponse.json({ message: 'Sesión cerrada' })
}