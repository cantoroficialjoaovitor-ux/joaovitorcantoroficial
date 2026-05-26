export default function Header() {
  return (
    <header
      style={{
        background: "#000",
        padding: "20px",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          João Vitor
        </h1>

        <nav
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <a href="#sobre" style={link}>
            Sobre
          </a>

          <a href="#galeria" style={link}>
            Galeria
          </a>

          <a href="#contato" style={link}>
            Contato
          </a>

          <a href="#agenda" style={link}>
            Agenda
          </a>
        </nav>
      </div>
    </header>
  )
}

const link = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
}
