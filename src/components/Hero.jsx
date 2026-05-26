import foto1 from "../images/foto1.png";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="mini-title">
          CANTOR SERTANEJO
        </span>

        <h1>
          JOÃO <br /> VITOR
        </h1>

        <div className="hero-divider"></div>

        <p>
          SHOWS • AGENDA • CONTRATAÇÕES
        </p>

        <h3>
          Música que emociona, voz que marca,
          presença que transforma.
        </h3>

        <a
          href="https://wa.me/5511986894866"
          target="_blank"
          className="hero-button"
        >
          CONTRATAR SHOW
        </a>

      </div>

      <img src={foto1} alt="João Vitor" className="hero-image" />

    </section>
  );
}
