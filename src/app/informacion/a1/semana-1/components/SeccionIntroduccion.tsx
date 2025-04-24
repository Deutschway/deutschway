'use client'

import { useState } from 'react'

export default function SeccionIntroduccion({ onContinue }: { onContinue: () => void }) {
  const [razon, setRazon] = useState('')
  const [objetivo, setObjetivo] = useState('')

  const puedeContinuar = razon.trim() !== '' && objetivo.trim() !== ''

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">👋 ¡Bienvenido a la Semana 1!</h2>

      <p className="text-gray-300 mb-4">
        Comenzar a aprender un idioma puede parecer difícil, pero con esta guía paso a paso,
        te prometo que al final de esta semana ya podrás presentarte en alemán con confianza.
      </p>

      <div className="bg-gray-900 p-4 rounded-lg text-gray-400 mb-6">
        <h3 className="text-xl text-purple-300 font-semibold mb-2">🎯 ¿Qué lograrás esta semana?</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Saludar formal e informalmente</li>
          <li>Decir tu nombre y país</li>
          <li>Comprender los pronombres básicos (Ich, Du, Sie)</li>
          <li>Formar tus primeras frases</li>
        </ul>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <label className="block text-gray-300 font-medium mb-2">
          💬 ¿Por qué estás aprendiendo alemán?
        </label>
        <input
          type="text"
          value={razon}
          onChange={(e) => setRazon(e.target.value)}
          placeholder="Ej: Me quiero ir a vivir a Alemania"
          className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <label className="block text-gray-300 font-medium mb-2">
          🎯 ¿Cuál es tu meta personal al terminar este curso?
        </label>
        <input
          type="text"
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
          placeholder="Ej: Poder tener una conversación simple con un alemán"
          className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <p className="text-sm text-gray-500 mb-4 italic">
        🧠 Anotar tus razones y objetivos te ayudará a mantenerte motivado durante todo el camino.
      </p>

      <div className="text-right">
        <button
          onClick={onContinue}
          disabled={!puedeContinuar}
          className={`py-3 px-6 rounded-xl text-white text-lg transition ${
            puedeContinuar
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'bg-gray-600 cursor-not-allowed'
          }`}
        >
          Comenzar la lección →
        </button>
      </div>
    </section>
  )
}