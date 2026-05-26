import foto1 from "../images/foto1.png"

export default function Hero() {
  return (
    <section className="hero">
      <img src={foto1} alt="João Vitor" />

      <div className="overlay"></div>

      <div className="hero-content">
        <h1>João Vitor</h1>

        <p>
          Shows • Agenda • Contratações
        </p>

        <a
          className="btn"
          href="https://wa.me/5511986894866"
          target="_blank"
        >
          Contratar Show
        </a>
      </div>
    </section>
  )
}
