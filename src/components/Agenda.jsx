export default function Agenda() {
  return (
    <section
      id="agenda"
      style={{
        background: "#111",
        color: "#fff",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "40px",
        }}
      >
        Agenda de Shows
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gap: "20px",
        }}
      >
        <div style={card}>
          <h3>São Paulo - SP</h3>
          <p>15 Junho 2026</p>
        </div>

        <div style={card}>
          <h3>Campinas - SP</h3>
          <p>22 Junho 2026</p>
        </div>

        <div style={card}>
          <h3>Guarulhos - SP</h3>
          <p>30 Junho 2026</p>
        </div>
      </div>
    </section>
  )
}

const card = {
  background: "#1d1d1d",
  padding: "30px",
  borderRadius: "16px",
}
