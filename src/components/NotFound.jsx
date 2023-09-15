import { Link } from "react-router-dom"
import { ArrowReturnLeft } from "react-bootstrap-icons"
import transition from "../helpers/transition"
import { useEffect } from "react";


const NotFound = () => {

  useEffect(() => {
    document.title = 'Carpi Coder | Página no encontrada';
  }, []);

  return (
    <section className="inner-section">
      <div className="container">
        <div className="not-found">
            <h1>Página no encontrada.</h1>
            <p>Cambié algunas rutas, así que capaz querés buscar en el menú!<br/>Si estás buscando los repasitos del curso de Coderhouse, podés hacer <Link to="/repasos-coderhouse" style={{textDecoration: "underline"}}>clic acá</Link>.</p>
            <Link to="/" className="inner-section-go-back-link"><ArrowReturnLeft /> Volver</Link>
        </div>
      </div>
    </section>
  )
}

export default transition(NotFound);