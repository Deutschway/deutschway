'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center shadow-md fixed top-0 w-full z-50">
      <div className="text-2xl font-bold">
        <Link href="/">DeutschWay</Link>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link href="#inicio" className="hover:text-purple-400 transition">Inicio</Link>
        <Link href="#como-funciona" className="hover:text-purple-400 transition">Cómo funciona</Link>
        <Link href="#niveles" className="hover:text-purple-400 transition">Explorar niveles</Link>
        <Link href="#testimonios" className="hover:text-purple-400 transition">Testimonios</Link>
      </div>

      <div>
        <Link
          href="#unirse"
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl transition"
        >
          Unirse
        </Link>
      </div>
    </nav>
  )
}