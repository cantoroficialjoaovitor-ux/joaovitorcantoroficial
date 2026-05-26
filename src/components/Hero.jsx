export default function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
          João Vitor
        </h1>

        <p style={{ fontSize: "24px", marginBottom: "30px" }}>
          Shows • Agenda • Contratações
        </p>

        <a
          href="https://wa.me/5511986894866"
          target="_blank"
          style={{
            background: "#FFD700",
            color: "#000",
            padding: "15px 30px",
            borderRadius: "10px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Contratar Show
        </a>
      </div>
    </section>
  )
}
