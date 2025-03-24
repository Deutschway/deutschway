'use client'

import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Crear cuenta</h2>
        <form>
          <input
            type="text"
            placeholder="Nombre"
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="mb-4 w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="mb-6 w-full px-3 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition"
          >
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-purple-600 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}