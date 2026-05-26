export default function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #333",
      }}
    >
      <p>© 2026 João Vitor - Todos os direitos reservados</p>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://instagram.com/joaovitorcantoroficial"
          target="_blank"
          style={{ color: "#FFD700" }}
        >
          Instagram
        </a>

        <a
          href="https://www.youtube.com/joaovitorcantoroficial"
          target="_blank"
          style={{ color: "#FFD700" }}
        >
          YouTube
        </a>

        <a
          href="https://open.spotify.com/intl-pt/artist/1NcHjMiIbcuCDUW9sg0Fls?si=yy_ALRWvSWWHva33HYJSJg"
          target="_blank"
          style={{ color: "#FFD700" }}
        >
          Spotify
        </a>
      </div>
    </footer>
  )
}
