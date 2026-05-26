export default function Contato() {
  return (
    <section
      id="contato"
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
          marginBottom: "30px",
        }}
      >
        Contato
      </h2>

      <p
        style={{
          fontSize: "22px",
          marginBottom: "30px",
        }}
      >
        Contrate João Vitor para seu evento
      </p>

      <a
        href="https://wa.me/5511986894866"
        target="_blank"
        style={{
          background: "#ffd000",
          color: "#000",
          padding: "18px 40px",
          borderRadius: "12px",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "20px",
        }}
      >
        Chamar no WhatsApp
      </a>
    </section>
  )
}
