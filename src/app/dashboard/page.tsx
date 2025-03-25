'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  name: string
  email: string
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)  
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/profile')
        if (!res.ok) throw new Error('No autenticado')

        const data = await res.json()
        setUser(data.user)
      } catch (err: unknown) {  
        if (err instanceof Error) {
          console.error(err.message) 
        }
        router.push('/login') 
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [router])

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    router.push('/login')
  }

  if (loading) return <p className="text-center mt-10">Cargando...</p>

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">¡Bienvenido!</h1>
        <p className="text-center mb-4">
          Has iniciado sesión como: <strong>{user?.name}</strong> <br />
          Correo: <strong>{user?.email}</strong>
        </p>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}