'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Semana = {
  titulo: string
  lecciones: string[]
  ruta: string
}

const SEMANAS: Semana[] = [
  {
    titulo: 'Semana 1 – Saludos y Presentaciones',
    ruta: '/informacion/a1/semana-1',
    lecciones: [
      'Saludos formales e informales',
      'El alfabeto alemán y pronunciación',
      'Cómo presentarte (nombre, país, idioma)',
      'Verbo “sein” y frases básicas'
    ]
  },
  {
    titulo: 'Semana 2 – Números y Nacionalidades',
    ruta: '/informacion/a1/semana-2',
    lecciones: [
      'Contar hasta 100',
      'Países y nacionalidades',
      'Verbos: “kommen” y “sprechen”',
      'Decir de dónde eres'
    ]
  },
  {
    titulo: 'Semana 3 – Familia y Profesiones',
    ruta: '/informacion/a1/semana-3',
    lecciones: [
      'Miembros de la familia',
      'Profesiones comunes',
      'Artículos definidos e indefinidos',
      'Pronombres personales'
    ]
  },
  {
    titulo: 'Semana 4 – La Casa y Objetos',
    ruta: '/informacion/a1/semana-4',
    lecciones: [
      'Habitaciones y muebles',
      'Colores y formas',
      'Plural de sustantivos',
      'Preposiciones básicas'
    ]
  },
  {
    titulo: 'Semana 5 – Hobbies y Tiempo Libre',
    ruta: '/informacion/a1/semana-5',
    lecciones: [
      'Actividades comunes',
      'Días de la semana',
      'Verbos modales: können, möchten',
      'Construcción de frases'
    ]
  },
  {
    titulo: 'Semana 6 – Rutinas y Verbos',
    ruta: '/informacion/a1/semana-6',
    lecciones: [
      'Mi rutina diaria',
      'Verbos separables e inseparables',
      'Palabras de frecuencia',
      'Conjugación práctica'
    ]
  },
  {
    titulo: 'Semana 7 – Compras y Comida',
    ruta: '/informacion/a1/semana-7',
    lecciones: [
      'Alimentos y bebidas',
      'Ir al supermercado',
      'Pedir en un restaurante',
      'Precios y cantidades'
    ]
  },
  {
    titulo: 'Semana 8 – Simulacro A1 + Certificación',
    ruta: '/informacion/a1/semana-8',
    lecciones: [
      'Repaso general',
      'Ejercicios integradores',
      'Simulacro examen A1',
      'Entrega de certificado digital'
    ]
  }
]

export default function A1CarruselInteractivo() {
  const router = useRouter()
  const [semanaActual, setSemanaActual] = useState(0)
  const [progresos, setProgresos] = useState<number[]>([])

  useEffect(() => {
    const data = localStorage.getItem('progresosA1')
    if (data) {
      setProgresos(JSON.parse(data))
    } else {
      setProgresos(Array(SEMANAS.length).fill(0))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('progresosA1', JSON.stringify(progresos))
  }, [progresos])

  const avanzar = () => {
    if (semanaActual < SEMANAS.length - 1) {
      setSemanaActual(semanaActual + 1)
    }
  }

  const retroceder = () => {
    if (semanaActual > 0) {
      setSemanaActual(semanaActual - 1)
    }
  }

  const completarSemana = () => {
    const nuevo = [...progresos]
    nuevo[semanaActual] = 100
    setProgresos(nuevo)
  }

  const iniciarLeccion = () => {
    router.push(SEMANAS[semanaActual].ruta)
  }

  const semana = SEMANAS[semanaActual]
  const progresoActual = progresos[semanaActual] || 0

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-400 mb-10">
        Curso A1 – Semana {semanaActual + 1}
      </h1>

      <div className="relative bg-gray-900 rounded-xl p-8 max-w-2xl w-full shadow-lg">
        <h2 className="text-2xl font-semibold text-purple-300 mb-4">{semana.titulo}</h2>

        <ul className="mb-6 space-y-2 text-gray-300">
          {semana.lecciones.map((item, i) => (
            <li key={i}>✅ {item}</li>
          ))}
        </ul>

        <div className="mb-2 text-sm text-gray-400">Progreso: {progresoActual}%</div>
        <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
          <div
            className="bg-purple-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progresoActual}%` }}
          ></div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={retroceder}
            disabled={semanaActual === 0}
            className={`px-4 py-2 rounded-xl ${
              semanaActual === 0 ? 'bg-gray-700 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            ← Anterior
          </button>

          <button
            onClick={avanzar}
            disabled={semanaActual === SEMANAS.length - 1}
            className={`px-4 py-2 rounded-xl ${
              semanaActual === SEMANAS.length - 1 ? 'bg-gray-700 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            Siguiente →
          </button>
        </div>

        <button
          onClick={iniciarLeccion}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold rounded-xl"
        >
          Iniciar lección →
        </button>

        <button
          onClick={completarSemana}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl"
        >
          Marcar esta semana como completada ✅
        </button>
      </div>
    </div>
  )
}