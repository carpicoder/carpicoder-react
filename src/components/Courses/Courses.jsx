import { Link } from "react-router-dom"
import { ArrowReturnLeft } from "react-bootstrap-icons"
import transition from "../../helpers/transition"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const Cursos = () => {

  const [tt, i18n] = useTranslation("global");

  useEffect(() => {
    document.title = 'Carpi Coder | Cursos';
  }, []);

  return (
    <section className="inner-section">
      <div className="container">
        <div className="not-found">
            <h1>{tt("global.soon")}</h1>
            <Link to="/" className="inner-section-go-back-link"><ArrowReturnLeft /> {tt("global.goBack")}</Link>
        </div>
      </div>
    </section>
  )
}

export default transition(Cursos);