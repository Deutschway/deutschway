'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleStartNow = () => {
    router.push('/informacion')
  }

  return (
    <>
      {/* HERO: Encabezado principal */}
      <main className="min-h-screen bg-black text-white py-12 flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Domina el alemán del nivel <span className="text-purple-500">A1 al B1</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Mejora tu alemán con lecciones interactivas, seguimiento de progreso y apoyo de la comunidad.
          </p>
          <button
            onClick={handleStartNow}
            className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-xl text-lg shadow-lg"
          >
            Iniciar ahora
          </button>
        </div>
        <div className="max-w-md">
          <img
            src="/images/hero-illustration.png"
            alt="Ilustración educativa"
            className="w-full h-auto"
          />
        </div>
      </main>

      {/* SECCIÓN 1: ¿Por qué funciona? */}
      <section className="bg-black py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Por qué DeutschWay funciona tan bien?</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          Un método claro, efectivo y pensado para quienes empiezan desde cero.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'Sin complicaciones: método directo al grano.',
            'Probado por alguien que aprendió desde cero.',
            'Funciona desde tu móvil o computadora.',
            'Gratis o mucho más barato que una academia.',
            'No necesitas saber nada de alemán para empezar.',
            'Diseñado especialmente para inmigrantes en Alemania.'
          ].map((text, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="text-green-400 text-2xl">✔</span>
              <p className="text-left text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 2: ¿Qué incluye? */}
      <section className="bg-black py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Qué incluye nuestro curso de alemán?</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          Aprende alemán desde cero hasta un nivel B1 con lecciones claras, ejercicios interactivos y una comunidad que te apoya en cada paso.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-gray-200">
          {[
            { icon: '🎧', title: 'Lecciones en audio interactivas de A1 a B1' },
            { icon: '🔊', title: 'Corrección de pronunciación con IA' },
            { icon: '📬', title: 'Foros y comunidad de apoyo' },
            { icon: '📈', title: 'Seguimiento de tu progreso día a día' },
            { icon: '☕', title: 'Práctica de conversación en vivo (modo café)' },
            { icon: '🧠', title: 'Tips, ejercicios y juegos para memorizar mejor' }
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <a href="#" className="text-yellow-400 hover:underline text-sm">Read more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 3: Testimonios */}
      <section className="bg-black py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Funciona de verdad? Mira lo que dicen</h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Historias reales de personas que aprendieron alemán más rápido de lo que imaginaban.
        </p>
        <div className="max-w-lg mx-auto bg-gray-900 rounded-lg p-6 shadow-md">
          <img
            src="/foto-perfil.jpg" // reemplaza por tu imagen en /public si deseas
            alt="Testimonio"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-300 italic mb-4">
            “Aprendí alemán en 4 meses gracias a esta plataforma. Hoy me comunico con alemanes todos los días sin miedo.”
          </p>
          <p className="font-semibold text-white">Gustavo Blanco</p>
          <p className="text-sm text-gray-400">Fundador de DeutschWay</p>
        </div>
      </section>
    </>
  )
}