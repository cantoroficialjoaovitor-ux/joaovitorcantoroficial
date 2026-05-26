export default function Social() {
  return (
    <section className="social" id="social">
      <h2>Redes Oficiais</h2>

      <div className="social-grid">

        <a
          href="https://instagram.com/joaovitorcantoroficial"
          target="_blank"
          className="social-card"
        >
          <div className="icon">📸</div>
          <h3>Instagram</h3>
          <p>@joaovitorcantoroficial</p>
        </a>

        <a
          href="https://www.youtube.com/joaovitorcantoroficial"
          target="_blank"
          className="social-card"
        >
          <div className="icon">▶️</div>
          <h3>YouTube</h3>
          <p>Canal Oficial</p>
        </a>

        <a
          href="https://open.spotify.com/intl-pt/artist/1NcHjMiIbcuCDUW9sg0Fls?si=yy_ALRWvSWWHva33HYJSJg"
          target="_blank"
          className="social-card"
        >
          <div className="icon">🎵</div>
          <h3>Spotify</h3>
          <p>Ouça Agora</p>
        </a>

      </div>
    </section>
  );
}
