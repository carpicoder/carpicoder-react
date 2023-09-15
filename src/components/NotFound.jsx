import { Link } from "react-router-dom"
import { ArrowReturnLeft } from "react-bootstrap-icons"
import transition from "../helpers/transition"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const NotFound = () => {

  const [tt, i18n] = useTranslation("global");

  useEffect(() => {
    document.title = 'Carpi Coder | Página no encontrada';
  }, []);

  return (
    <section className="inner-section">
      <div className="container">
        <div className="not-found">
            <h1>{tt("global.notFound")}</h1>
            <p>{tt("global.changedRoutes")}<br/>{tt("global.lookingForCH")} <Link to="/repasos-coderhouse" style={{textDecoration: "underline"}}>{tt("global.clickHere")}</Link>.</p>
            <Link to="/" className="inner-section-go-back-link"><ArrowReturnLeft /> {tt("global.goBack")}</Link>
        </div>
      </div>
    </section>
  )
}

export default transition(NotFound);