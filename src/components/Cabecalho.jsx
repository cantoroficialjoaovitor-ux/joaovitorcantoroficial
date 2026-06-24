import instagram from "../imagens/instagram.png";
import spotify from "../imagens/spotify.png.png";
import youtube from "../imagens/youtube.png.png";

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="container-cabecalho">

        <div className="logo">
  JOÃO VITOR TESTE 2026
</div>

        <nav className="menu">

          <a href="#home">Home</a>

          <a href="#sobre">Sobre</a>

          <a href="#livemarketing">Live Marketing</a>

          <a href="#manifesto">Manifesto</a>

          <a href="#experiencias">Experiências</a>

          <a href="#contato">Contato</a>

          <div className="dropdown">
            <button className="dropbtn">
              Redes Sociais
            </button>

            <div className="dropdown-content">

              <a
                href="https://www.instagram.com/joaovitorcantoroficial"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noreferrer"
              >
                Spotify
              </a>

              <a
                href="https://www.youtube.com/joaovitorcantoroficial"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>

            </div>
          </div>

          <a
            href="https://wa.me/5511986894866"
            target="_blank"
            rel="noreferrer"
            className="botao-orcamento"
          >
            Solicitar Orçamento
          </a>

        </nav>

      </div>
    </header>
  );
}

export default Cabecalho;
