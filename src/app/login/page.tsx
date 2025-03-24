'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // 👈 ESTA LÍNEA ES CLAVE
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Error al iniciar sesión')
    } else {
      console.log('Inicio de sesión correcto:', data.user)
      router.push('/dashboard') // Cambia esta ruta si tu dashboard es otra
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Iniciar sesión</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              className="w-full px-4 py-2 border rounded pr-16"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-purple-600 hover:underline"
            >
              {showPassword ? 'Ocultar' : 'Ver'}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Iniciar sesión
          </button>
        </form>

        {error && (
          <p className="text-red-500 mt-3 text-center text-sm">{error}</p>
        )}

        <p className="mt-4 text-center text-sm">
          ¿No tienes cuenta?{' '}
          <Link href="/register" className="text-purple-600 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  )
}