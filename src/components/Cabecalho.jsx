export default function Cabecalho() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#000",
        zIndex: 999,
        borderBottom: "1px solid #222",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "28px",
            fontWeight: "700",
            margin: 0,
          }}
        >
          João Vitor
        </h1>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <a href="#sobre" style={link}>
            Sobre
          </a>

          <a href="#agenda" style={link}>
            Agenda
          </a>

          <a href="#contato" style={link}>
            Contato
          </a>

          <a href="#redes" style={linkGold}>
            Redes Sociais
          </a>

          <a
            href="https://wa.me/5511986894866"
            target="_blank"
            rel="noreferrer"
            style={botao}
          >
            Contratar Show
          </a>
        </nav>
      </div>
    </header>
  );
}

const link = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "18px",
};

const linkGold = {
  color: "#d4af37",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "18px",
};

const botao = {
  background: "#d4af37",
  color: "#000",
  padding: "14px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "700",
};
