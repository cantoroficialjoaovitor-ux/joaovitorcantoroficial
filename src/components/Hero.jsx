import foto1 from "../images/foto1.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url(${foto1})`,
      }}
    >
      <div className="hero-content">
        <span className="mini-title">Cantor Sertanejo</span>

        <h1>João Vitor</h1>

        <p>
          Shows • Eventos • Casamentos • Barzinhos • Grandes Eventos
        </p>

        <a
          href="https://wa.me/5511986894866"
          target="_blank"
          className="hero-btn"
        >
          Contratar Show
        </a>
      </div>
    </section>
  );
}
