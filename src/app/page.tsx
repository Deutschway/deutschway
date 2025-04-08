import '../styles/globals.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Domina el alemán del nivel <span className="text-purple-500">A1 al B1</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Mejora tu alemán con lecciones interactivas, seguimiento de progreso y apoyo de la comunidad.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-xl text-lg shadow-lg">
          Inicia ahora
        </button>
      </div>
      <div className="max-w-md">
        <img src="/images/hero-illustration.png" alt="Ilustración educativa" className="w-full h-auto" />
      </div>
    </main>
  );
}