import instagram from "../images/instagram.png";
import spotify from "../images/spotify.png.png";
import youtube from "../images/youtube.png.png";

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="container-cabecalho">
        
        <div className="logo">
          João Vitor
        </div>

        <nav className="menu">
          <a href="#sobre">Sobre</a>
          <a href="#agenda">Agenda</a>

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
                <img
                  src={instagram}
                  alt="Instagram"
                  className="icone-social"
                />
                Instagram
              </a>

              <a
                href="https://open.spotify.com/intl-pt/artist/1NcHjMiIbcuCDUW9sg0Fls?si=mrISh3mHTd2RUhMKfRphuQ"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={spotify}
                  alt="Spotify"
                  className="icone-social"
                />
                Spotify
              </a>

              <a
                href="https://www.youtube.com/joaovitorcantoroficial"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={youtube}
                  alt="YouTube"
                  className="icone-social"
                />
                YouTube
              </a>

            </div>
          </div>

          <a
            href="https://wa.me/5511986894866"
            target="_blank"
            rel="noreferrer"
            className="botao-show"
          >
            Contratar Show
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
