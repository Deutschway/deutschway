'use client'

import { useEffect } from 'react'

export default function Semana1() {
  // Marcar como completada al abrir (simulado)
  useEffect(() => {
    const data = localStorage.getItem('progresosA1')
    if (data) {
      const progresos = JSON.parse(data)
      progresos[0] = 100 // Semana 1
      localStorage.setItem('progresosA1', JSON.stringify(progresos))
    }
  }, [])

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-16">

        {/* Sección 1: Introducción */}
        <section>
          <h1 className="text-3xl font-bold text-purple-400 mb-4">Semana 1 – Saludos y Presentaciones</h1>
          <p className="text-gray-300">
            Bienvenido al inicio de tu viaje en el alemán. Esta semana aprenderás a saludar, decir cómo te llamas
            y usar frases básicas como “Ich heiße Anna”.
          </p>
        </section>

        {/* Sección 2: ¿Qué significa "Ich"? */}
        <section>
          <h2 className="text-2xl font-bold text-purple-300 mb-4">¿Qué significa "Ich"?</h2>
          <p className="text-gray-300 mb-4">
            En alemán, <strong className="text-purple-400">"ich"</strong> significa <em>yo</em>. Es un pronombre personal, es decir,
            una palabra que usamos para hablar de una persona. En este caso, tú.
          </p>

          <p className="text-gray-300 mb-4">
            Aquí tienes los tres pronombres más importantes para empezar:
          </p>

          <table className="table-auto w-full text-left text-gray-300 mb-6 border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-purple-400">
                <th className="p-2">Pronombre</th>
                <th className="p-2">Traducción</th>
                <th className="p-2">Uso</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="p-2">Ich</td>
                <td className="p-2">Yo</td>
                <td className="p-2">Hablar de ti mismo</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-2">Du</td>
                <td className="p-2">Tú (informal)</td>
                <td className="p-2">Hablar con amigos o gente cercana</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-2">Sie</td>
                <td className="p-2">Usted (formal)</td>
                <td className="p-2">Cuando hablas con desconocidos o en un contexto formal</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-400 italic">🧠 Recuerda: en alemán, la forma de dirigirte a otros cambia si usas "du" o "Sie".</p>
        </section>

        {/* Sección 3: Vocabulario clave */}
        <section>
          <h2 className="text-2xl font-bold text-purple-300 mb-4">Vocabulario clave</h2>
          <p className="text-gray-400">Próximamente...</p>
        </section>

        {/* Sección 4: Estructura de frases */}
        <section>
          <h2 className="text-2xl font-bold text-purple-300 mb-4">¿Cómo se arma una frase?</h2>
          <p className="text-gray-400">Próximamente...</p>
        </section>

        {/* Sección 5: Audio y pronunciación */}
        <section>
          <h2 className="text-2xl font-bold text-purple-300 mb-4">Escucha y repite</h2>
          <p className="text-gray-400">Próximamente...</p>
        </section>

        {/* Sección 6: Comprensión auditiva */}
        <section>
          <h2 className="text-2xl font-bold text-purple-300 mb-4">¿Qué escuchaste?</h2>
          <p className="text-gray-400">Próximamente...</p>
        </section>

        {/* Sección 7: Producción escrita u oral */}
        <section>
          <h2 className="text-2xl font-bold text-purple-300 mb-4">Preséntate tú mismo</h2>
          <p className="text-gray-400">Próximamente...</p>
        </section>

        {/* Sección 8: Mini test + confirmar */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-green-400 mb-4">✅ Semana completada</h2>
          <p className="text-gray-400 mb-2">Tu progreso ha sido registrado automáticamente.</p>
          <p className="text-sm text-gray-500">Puedes volver al carrusel para avanzar a la semana 2.</p>
        </section>

      </div>
    </div>
  )
}