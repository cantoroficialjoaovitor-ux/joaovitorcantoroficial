import foto1 from "../images/foto1.png"

export default function Hero() {
  return (
    <section
      style={
  backgroundImage: `url(${foto1})`,
  backgroundSize: "contain",
  backgroundPosition: "center top",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#000",
}
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          padding: "40px",
          borderRadius: "20px",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "10px",
          }}
        >
          João Vitor
        </h1>

        <p
          style={{
            fontSize: "24px",
            marginBottom: "30px",
          }}
        >
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
            display: "inline-block",
          }}
        >
          Contratar Show
        </a>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://instagram.com/joaovitorcantoroficial"
            target="_blank"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/joaovitorcantoroficial"
            target="_blank"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            YouTube
          </a>

          <a
            href="https://open.spotify.com/intl-pt/artist/1NcHjMiIbcuCDUW9sg0Fls?si=yy_ALRWvSWWHva33HYJSJg"
            target="_blank"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Spotify
          </a>
        </div>
      </div>
    </section>
  )
}
