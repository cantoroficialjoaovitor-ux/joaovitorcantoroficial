export default function Cabecalho() {
  return (
    <header className="header">

      <div className="nav">

        <div className="logo">
          João Vitor
        </div>

        <div className="menu">

          <a href="#sobre">Sobre</a>

          <a href="#agenda">Agenda</a>

          <a href="#contato">Contato</a>

          <a href="#redes">
            Redes Sociais
          </a>

          <a
            href="https://wa.me/5511998923563"
            target="_blank"
            className="menu-button"
          >
            Contratar Show
          </a>

        </div>

      </div>

    </header>
  );
}
