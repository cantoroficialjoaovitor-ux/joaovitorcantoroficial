import foto1 from "../images/foto1.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.3)), url(${foto1})`,
      }}
    >
      <div className="hero-content">

        <span className="mini-title">
          CANTOR SERTANEJO
        </span>

        <h1>
          JOÃO <br /> VITOR
        </h1>

        <div className="hero-line"></div>

        <p>
          SHOWS • AGENDA • CONTRATAÇÕES
        </p>

        <h3>
          Música que emociona,
          voz que marca,
          presença que transforma.
        </h3>

        <a
          href="https://wa.me/5511998923563"
          target="_blank"
          className="hero-button"
        >
          CONTRATAR SHOW
        </a>

      </div>
    </section>
  );
}
