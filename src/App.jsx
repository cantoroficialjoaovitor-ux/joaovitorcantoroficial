import LiveMarketing from "./componentes/LiveMarketing";
import "./index.css";

import Cabecalho from "./componentes/Cabecalho";
import Hero from "./componentes/Hero";
import Sobre from "./componentes/Sobre";
import Agenda from "./componentes/Agenda";
import Videos from "./componentes/Videos";
import Galeria from "./componentes/Galeria";
import Redes from "./componentes/Redes";
import Contato from "./componentes/Contato";
import Contratacao from "./componentes/Contratacao";
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
      <Cabecalho />

      <Hero />

      <Sobre />
      <LiveMarketing />

      <Agenda />

      <Videos />

      <Galeria />

      <Redes />

      <Contato />

      <Contratacao />

      <Footer />
    </>
  );
}

export default App;
