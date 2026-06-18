import fotoJoao from "../images/joao.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="overlay"></div>

      <div className="hero-conteudo">
        <div className="texto-hero">

          <span className="subtitulo">
            CANTOR SERTANEJO • EVENTOS • EXPERIÊNCIAS
          </span>

          <h1>
            JOÃO
            <br />
            VITOR
          </h1>

          <p className="frase">
            MÚSICA AO VIVO PARA EVENTOS, EMPRESAS E MOMENTOS INESQUECÍVEIS
          </p>

          <p className="descricao">
            Transformando eventos em experiências memoráveis através da música sertaneja.
            <br /><br />
            Shows acústicos, eventos corporativos,
            confraternizações, feiras, convenções,
            casamentos e apresentações especiais.
          </p>

          <div className="hero-botoes">

            <a
              href="https://wa.me/5511986894866"
              target="_blank"
              rel="noreferrer"
              className="btn-hero"
            >
              SOLICITAR ORÇAMENTO
            </a>

            <a
              href="#videos"
              className="btn-secundario"
            >
              VER VÍDEOS
            </a>

          </div>

        </div>

        <div className="imagem-hero">
          <img src={fotoJoao} alt="João Vitor" />
        </div>
      </div>
    </section>
  );
}
