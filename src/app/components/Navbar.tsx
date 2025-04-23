'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 flex items-center justify-between fixed top-0 w-full z-50">
      {/* Logo a la izquierda */}
      <div className="text-2xl font-bold">
        <Link href="/">DeutschWay</Link>
      </div>

      {/* Enlaces centrados */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6">
        <Link href="#como-funciona" className="hover:text-purple-400 transition">Cómo funciona</Link>
        <Link href="#niveles" className="hover:text-purple-400 transition">Explorar niveles</Link>
        <Link href="#testimonios" className="hover:text-purple-400 transition">Testimonios</Link>
      </div>

      {/* Botón "Inicio" a la derecha */}
      <div className="hidden md:block">
        <Link
          href="/"
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl transition"
        >
          Inicio
        </Link>
      </div>
    </nav>
  )
}