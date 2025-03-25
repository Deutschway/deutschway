import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'secreto-super-seguro'

export async function POST(req: Request) {
  const { name, email, password } = await req.json()

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 })
  }

  const existingUser = await prisma.user.findUnique({ where: { email } })

  if (existingUser) {
    return NextResponse.json({ error: 'El usuario ya existe' }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  // Crear JWT
  const token = jwt.sign(
    {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  )

  // Esperar las cookies antes de establecerlas
  const cookieStore = await cookies()  // Asegurarnos de que sea un Promise

  const response = NextResponse.json({
    message: 'Usuario registrado y logueado',
    user: newUser
  })

  // Establecer el token de la cookie con await
  cookieStore.set('auth_token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 días
  })

  return response
}