'use client'

export default function A1Page() {
  return (
    <div className="min-h-screen bg-black text-gray-200 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Título y descripción */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-400 mb-4">Curso de Alemán – Nivel A1</h1>
          <p className="text-lg text-gray-300">
            Aprende alemán desde cero con una metodología intensiva, práctica y acompañamiento personalizado.
          </p>
        </section>

        {/* Temario por semanas */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6 text-center">Contenido del curso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-purple-200 font-bold mb-2">Semana 1</h3>
              <p>Saludos, presentaciones, alfabeto, pronombres personales.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-purple-200 font-bold mb-2">Semana 2</h3>
              <p>Números, nacionalidades, países, verbo “sein”.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-purple-200 font-bold mb-2">Semana 3</h3>
              <p>Mi familia, profesiones, artículos definidos e indefinidos.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-purple-200 font-bold mb-2">Semana 4</h3>
              <p>Vocabulario de casa y objetos cotidianos, preposiciones.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-purple-200 font-bold mb-2">Semana 5</h3>
              <p>Hobbies, tiempo libre, verbos modales básicos.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-purple-200 font-bold mb-2">Semana 6</h3>
              <p>Rutinas diarias, presente simple, separables/inseparables.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-purple-200 font-bold mb-2">Semana 7</h3>
              <p>Compras, comidas, pedir en un restaurante, precios.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-purple-200 font-bold mb-2">Semana 8</h3>
              <p>Repaso general + simulacro de examen A1.</p>
            </div>
          </div>
        </section>

        {/* Detalles del curso */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Detalles del curso</h2>
          <ul className="text-gray-400 text-md space-y-2">
            <li>🕒 Carga horaria: 80 horas en 8 semanas</li>
            <li>🎥 Modalidad: Online en vivo + acceso a grabaciones</li>
            <li>👩‍🏫 Tutorías semanales personalizadas</li>
            <li>📥 Material descargable + ejercicios interactivos</li>
            <li>📜 Certificación al completar el curso</li>
          </ul>
        </section>

        {/* Llamado a la acción */}
        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 text-lg font-semibold rounded-xl transition">
            ¡Inscribirme ahora!
          </button>
        </div>
      </div>
    </div>
  );
}