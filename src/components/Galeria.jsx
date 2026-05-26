import foto2 from "../images/foto2.png"
import foto3 from "../images/foto3.png"
import foto4 from "../images/foto4.png"
import foto5 from "../images/foto5.png"

export default function Galeria() {
  const fotos = [foto2, foto3, foto4, foto5]

  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6">
      <h2 className="text-5xl font-bold text-center mb-16">
        Galeria
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {fotos.map((foto, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl bg-black shadow-2xl hover:scale-105 transition duration-300"
          >
            <img
              src={foto}
              alt={`Foto ${index + 1}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
