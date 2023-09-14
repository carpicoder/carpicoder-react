import { Link } from "react-router-dom"
import { ArrowReturnLeft } from "react-bootstrap-icons"
import transition from "../../helpers/transition"
import { useEffect } from "react";


const Cursos = () => {

  useEffect(() => {
    document.title = 'Carpi Coder | Cursos';
  }, []);

  return (
    <section className="inner-section">
      <div className="container">
        <div className="not-found">
            <h1>Próximamente</h1>
            <Link to="/" className="inner-section-go-back-link"><ArrowReturnLeft /> Volver</Link>
        </div>
      </div>
    </section>
  )
}

export default transition(Cursos);