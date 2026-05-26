export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white text-center px-6">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          João Vitor
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Shows • Agenda • Contratações
        </p>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noreferrer"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-full transition"
        >
          Contratar Show
        </a>
      </div>
    </section>
  )
}