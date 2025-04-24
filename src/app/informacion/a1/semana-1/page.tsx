'use client'

import { useState, useEffect } from 'react'
import SeccionIntroduccion from './components/SeccionIntroduccion'
import SeccionPronombres from './components/SeccionPronombres'

export default function Semana1() {
  const [seccionActual, setSeccionActual] = useState(1)

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
      {seccionActual === 1 && (
        <SeccionIntroduccion onContinue={() => setSeccionActual(2)} />
      )}
      {seccionActual === 2 && (
        <SeccionPronombres onContinue={() => setSeccionActual(3)} />
      )}
      {/* Más secciones aquí... */}
    </div>
  )
}