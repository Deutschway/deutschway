'use client'

import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  const handleStartNow = () => {
    router.push('/informacion'); // Redirige a la página de información o selección de curso
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          ¡Bienvenido a DeutschWay!
        </h1>
        <p className="text-center mb-4">
          Mejora tu alemán con lecciones interactivas, seguimiento de progreso y apoyo de la comunidad.
        </p>
        
        <button
          onClick={handleStartNow}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition"
        >
          Iniciar ahora
        </button>
      </div>
    </div>
  )
}