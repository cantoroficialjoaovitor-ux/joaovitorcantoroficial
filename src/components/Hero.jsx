import fotoJoao from "../imagens/joao.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-conteudo">
        <div className="texto-hero">
          <span className="subtitulo">CANTOR SERTANEJO</span>

          <h1>
            JOÃO
            <br />
            VITOR
          </h1>

          <p className="frase">
            SHOWS • AGENDA • CONTRATAÇÕES
          </p>

          <p className="descricao">
            Música que emociona,
            <br />
            voz que marca,
            <br />
            presença que transforma.
          </p>

          <a
            href="https://wa.me/5511986894866"
            target="_blank"
            rel="noreferrer"
            className="btn-hero"
          >
            CONTRATAR SHOW
          </a>
        </div>

        <div className="imagem-hero">
          <img src={fotoJoao} alt="João Vitor" />
        </div>
      </div>
    </section>
  );
}
