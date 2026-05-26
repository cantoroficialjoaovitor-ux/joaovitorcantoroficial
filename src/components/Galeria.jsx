import foto2 from "../images/foto2.png"
import foto3 from "../images/foto3.png"
import foto4 from "../images/foto4.png"
import foto5 from "../images/foto5.png"

export default function Galeria() {
  return (
    <section className="galeria" id="galeria">

      <div className="container">

        <h2>Galeria</h2>

        <div className="grid-galeria">

          <img src={foto2} alt="" />
          <img src={foto3} alt="" />
          <img src={foto4} alt="" />
          <img src={foto5} alt="" />

        </div>

      </div>

    </section>
  )
}
