import Cabecalho from "./components/Cabecalho";

export default function App() {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      <Cabecalho />

      <section
        style={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          paddingLeft: "120px",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "5px",
              fontSize: "22px",
            }}
          >
            CANTOR SERTANEJO
          </p>

          <h1
            style={{
              fontSize: "110px",
              lineHeight: "100px",
              margin: "20px 0",
            }}
          >
            JOÃO
            <br />
            VITOR
          </h1>

          <p
            style={{
              fontSize: "26px",
              marginBottom: "20px",
            }}
          >
            SHOWS • AGENDA • CONTRATAÇÕES
          </p>

          <p
            style={{
              fontSize: "32px",
              lineHeight: "45px",
              color: "#ddd",
            }}
          >
            Música que emociona,
            <br />
            voz que marca,
            <br />
            presença que transforma.
          </p>

          <a
            href="https://wa.me/5511998923563"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "40px",
              background: "#d4af37",
              color: "#000",
              padding: "18px 35px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "22px",
            }}
          >
            CONTRATAR SHOW
          </a>
        </div>
      </section>
    </div>
  );
}
