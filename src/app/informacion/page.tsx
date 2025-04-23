// src/app/informacion.tsx

'use client'

import Link from 'next/link'

export default function InformacionPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">
          ¡Cursos intensivos de alemán!
        </h1>
        <p className="text-gray-300 text-lg">
          Nuestros cursos siguen el estándar europeo (MCER), diseñados para una verdadera inmersión lingüística.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Curso A1 */}
        <div className="bg-gray-900 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">Nivel A1</h2>
          <p className="text-gray-300 mb-4">
            Aprende alemán desde cero y adquiere competencias básicas para la vida diaria.
          </p>
          <ul className="text-gray-400 text-sm mb-4">
            <li>📅 Duración: 8 semanas</li>
            <li>⏱️ Clases: 10 horas por semana</li>
            <li>📚 Total: 80 horas</li>
            <li>🖥️ Modalidad: Online en vivo + tareas interactivas</li>
          </ul>
          <Link href="/informacion/a1">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl transition">
              Más información
            </button>
          </Link>
        </div>

        {/* Curso A2 */}
        <div className="bg-gray-900 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">Nivel A2</h2>
          <p className="text-gray-300 mb-4">
            Profundiza en la gramática, vocabulario y desarrolla fluidez para situaciones cotidianas.
          </p>
          <ul className="text-gray-400 text-sm mb-4">
            <li>📅 Duración: 10 semanas</li>
            <li>⏱️ Clases: 12 horas por semana</li>
            <li>📚 Total: 120 horas</li>
            <li>🖥️ Modalidad: Online en vivo + materiales descargables</li>
          </ul>
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl transition">
            Más información
          </button>
        </div>

        {/* Curso B1 */}
        <div className="bg-gray-900 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">Nivel B1</h2>
          <p className="text-gray-300 mb-4">
            Comunícate con confianza en contextos laborales, sociales y académicos. Preparación para el certificado Goethe.
          </p>
          <ul className="text-gray-400 text-sm mb-4">
            <li>📅 Duración: 12 semanas</li>
            <li>⏱️ Clases: 15 horas por semana</li>
            <li>📚 Total: 180 horas</li>
            <li>🖥️ Modalidad: Online + práctica oral con tutor nativo</li>
          </ul>
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl transition">
            Más información
          </button>
        </div>
      </div>
    </div>
  );
}