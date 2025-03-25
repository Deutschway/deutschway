import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'  // eslint-disable-line @typescript-eslint/no-unused-vars

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'secreto-super-seguro'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })
  }

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 })
  }

  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  )

  const response = NextResponse.json({
    message: 'Inicio de sesión exitoso',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  })

  // Aquí estamos utilizando correctamente cookies()
  response.cookies.set('auth_token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 días
  })

  return response
}