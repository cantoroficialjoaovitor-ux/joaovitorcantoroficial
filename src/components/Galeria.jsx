import foto1 from "../imagens/foto1.png"
import foto2 from "../imagens/foto2.png"
import foto3 from "../imagens/foto3.png"

export default function Galeria() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#111",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          marginBottom: "40px",
        }}
      >
        Galeria
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {[foto1, foto2, foto3].map((foto, index) => (
          <img
            key={index}
            src={foto}
            alt="João Vitor"
            style={{
              width: "100%",
              borderRadius: "20px",
              height: "350px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </section>
  )
}
