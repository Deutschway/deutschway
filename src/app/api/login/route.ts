import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'secreto-super-seguro'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 })
  }

  // Buscar usuario por email
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })
  }

  // Comparar contraseñas
  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 })
  }

  // Crear JWT
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  )

  // Guardar JWT en una cookie
  cookies().set('auth_token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 días
  })

  // Responder con datos del usuario
  return NextResponse.json({
    message: 'Inicio de sesión exitoso',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  })
}