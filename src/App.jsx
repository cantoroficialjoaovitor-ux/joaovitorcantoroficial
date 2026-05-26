import Header from "./componentes/Header";

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
      <Header />

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

      <section
        id="redes"
        style={{
          padding: "80px 40px",
          background: "#0b0b0b",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            letterSpacing: "4px",
          }}
        >
          ACOMPANHE
        </p>

        <h2
          style={{
            fontSize: "52px",
            marginBottom: "50px",
          }}
        >
          NAS REDES SOCIAIS
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div style={card}>
            <div style={{ fontSize: "70px" }}>📸</div>
            <h3>INSTAGRAM</h3>
            <p>@joaovitorcantoroficial</p>
          </div>

          <div style={card}>
            <div style={{ fontSize: "70px" }}>🎵</div>
            <h3>SPOTIFY</h3>
            <p>Ouça agora</p>
          </div>

          <div style={card}>
            <div style={{ fontSize: "70px" }}>▶️</div>
            <h3>YOUTUBE</h3>
            <p>youtube.com/joaovitorcantoroficial</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const card = {
  background: "#111",
  border: "1px solid #333",
  borderRadius: "20px",
  padding: "40px",
  width: "320px",
};
