'use client'

import { useState } from 'react'

export default function SeccionPronombres({ onContinue }: { onContinue: () => void }) {
  const [paso, setPaso] = useState(1)
  const avanzar = () => setPaso((prev) => prev + 1)

  const preguntas = [
    {
      pregunta: '¿Qué pronombre usarías para hablar de ti mismo?',
      opciones: ['Du', 'Ich', 'Sie'],
      correcta: 'Ich',
    },
    {
      pregunta: '¿Qué pronombre usarías con tu mejor amigo?',
      opciones: ['Sie', 'Ich', 'Du'],
      correcta: 'Du',
    },
    {
      pregunta: '¿Qué pronombre usarías con tu jefe?',
      opciones: ['Du', 'Ich', 'Sie'],
      correcta: 'Sie',
    },
    {
      pregunta: '“Sie” se usa para...',
      opciones: ['Amigos', 'Familia', 'Situaciones formales'],
      correcta: 'Situaciones formales',
    },
  ]

  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null))
  const [frases, setFrases] = useState({ ich: '', sie: '' })

  const seleccionar = (index: number, opcion: string) => {
    const nuevo = [...respuestas]
    nuevo[index] = opcion
    setRespuestas(nuevo)
  }

  const quizCompleto = respuestas.every((r) => r !== null)
  const frasesLlenas = frases.ich.trim() !== '' && frases.sie.trim() !== ''

  return (
    <section className="max-w-3xl mx-auto space-y-12">

      {paso === 1 && (
        <>
          <h2 className="text-2xl font-bold text-purple-300">👤 Pronombres personales</h2>
          <p className="text-gray-300 mb-4">Un pronombre es una palabra que sustituye a un nombre. Aprende estos tres básicos:</p>
          <table className="w-full text-left text-gray-300 border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-purple-400">
                <th className="p-2">Pronombre</th>
                <th className="p-2">Traducción</th>
                <th className="p-2">Uso</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2">Ich</td><td className="p-2">Yo</td><td className="p-2">Hablar de ti mismo</td></tr>
              <tr><td className="p-2">Du</td><td className="p-2">Tú</td><td className="p-2">Amigos, familia</td></tr>
              <tr><td className="p-2">Sie</td><td className="p-2">Usted</td><td className="p-2">Situaciones formales</td></tr>
            </tbody>
          </table>
          <button onClick={avanzar} className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl">Siguiente</button>
        </>
      )}

      {paso === 2 && (
        <>
          <h3 className="text-lg text-purple-300 font-semibold">🎧 Escucha cómo suenan (simulado)</h3>
          <ul className="text-gray-300 space-y-2">
            <li>🔊 Ich – se pronuncia “ij”</li>
            <li>🔊 Du – como “du” en duda</li>
            <li>🔊 Sie – como “zi”</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4 italic">🧠 Repite cada palabra al menos 3 veces.</p>
          <button onClick={avanzar} className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl">Siguiente</button>
        </>
      )}

      {paso === 3 && (
        <>
          <h3 className="text-lg text-purple-300 font-semibold">👀 ¿Cómo tratarías a estas personas?</h3>
          <p className="text-gray-300 mb-4">Asocia cada situación con el pronombre correcto.</p>
          <ul className="text-gray-400 list-disc list-inside">
            <li>Un niño en el parque → <strong>Du</strong></li>
            <li>Una persona mayor desconocida → <strong>Sie</strong></li>
            <li>Hablas de ti → <strong>Ich</strong></li>
          </ul>
          <button onClick={avanzar} className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl">Siguiente</button>
        </>
      )}

      {paso === 4 && (
        <>
          <h3 className="text-lg text-purple-300 font-semibold">🗣️ Escribe tú mismo</h3>
          <p className="text-gray-300 mb-4">Escribe una frase con <strong>Ich</strong> y una con <strong>Sie</strong>.</p>

          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Frase con <strong>Ich</strong></label>
            <input
              value={frases.ich}
              onChange={(e) => setFrases({ ...frases, ich: e.target.value })}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
              placeholder="Ej: Ich bin Pedro."
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Frase con <strong>Sie</strong></label>
            <input
              value={frases.sie}
              onChange={(e) => setFrases({ ...frases, sie: e.target.value })}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
              placeholder="Ej: Wie heißen Sie?"
            />
          </div>

          <button
            onClick={avanzar}
            disabled={!frasesLlenas}
            className={`mt-6 py-2 px-4 rounded-xl text-white transition ${
              frasesLlenas ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            Siguiente
          </button>
        </>
      )}

      {paso === 5 && (
        <>
          <h3 className="text-lg text-purple-300 font-semibold mb-4">🧠 Quiz: Elige la opción correcta</h3>
          {preguntas.map((q, i) => (
            <div key={i} className="mb-6">
              <p className="text-gray-200 mb-2">{i + 1}. {q.pregunta}</p>
              <div className="flex flex-wrap gap-3">
                {q.opciones.map((op, j) => (
                  <button
                    key={j}
                    onClick={() => seleccionar(i, op)}
                    className={`py-2 px-4 rounded-xl transition ${
                      respuestas[i] === op
                        ? op === q.correcta
                          ? 'bg-green-600 text-white'
                          : 'bg-red-600 text-white'
                        : 'bg-gray-700 text-white hover:bg-purple-600'
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="text-right">
            <button
              onClick={onContinue}
              disabled={!quizCompleto}
              className={`py-3 px-6 rounded-xl text-white text-lg transition ${
                quizCompleto ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 cursor-not-allowed'
              }`}
            >
              Continuar →
            </button>
          </div>
        </>
      )}
    </section>
  )
}