export default function Galeria() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Galeria
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-800 h-64 rounded-2xl"></div>
          <div className="bg-zinc-800 h-64 rounded-2xl"></div>
          <div className="bg-zinc-800 h-64 rounded-2xl"></div>
        </div>
      </div>
    </section>
  )
}