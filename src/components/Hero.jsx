import foto1 from "../images/foto1.png";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-mini">
          Cantor Sertanejo
        </span>

        <h1>
          João <br /> Vitor
        </h1>

        <div className="hero-line"></div>

        <p>
          Shows • Agenda • Contratações
        </p>

        <h3>
          Música que emociona, voz que marca,
          presença que transforma.
        </h3>

        <a
          href="https://wa.me/5511986894866"
          target="_blank"
          className="hero-btn"
        >
          Contratar Show
        </a>

      </div>

      <div className="hero-right">
        <img src={foto1} alt="João Vitor" />
      </div>

    </section>
  );
}
