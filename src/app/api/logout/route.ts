import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  // Esperamos la promesa de cookies() y luego trabajamos con ella
  const cookieStore = await cookies() // Asegúrate de esperar la promesa

  // Usamos NextResponse para establecer la respuesta correctamente
  const response = NextResponse.json({ message: 'Sesión cerrada' })

  // Ahora utilizamos cookieStore.delete() para eliminar la cookie "auth_token"
  cookieStore.delete('auth_token') // Esto elimina la cookie

  return response
}