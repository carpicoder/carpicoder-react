import { Link } from "react-router-dom"
import { ArrowReturnLeft } from "react-bootstrap-icons"
import transition from "../../helpers/transition"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CourseItem from "./CourseItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"


const Cursos = () => {

  const [tt, i18n] = useTranslation("global");
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    document.title = 'Carpi Coder | ' + tt("pages.courses");
  }, [i18n.language]);

  useEffect(() => {
    
    const cursosRef = collection(db, "cursos");
    getDocs(cursosRef)
      .then((resp) => {
        setCursos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })

  }, [])
  

  return (
    <section className="inner-section">
      <div className="container">
        {/* <div className="courses-grid">
          {cursos && cursos.map(curso => <CourseItem key={curso.id} curso={curso} />)}
        </div> */}
        <div className="not-found">
            <h2>Próximamente</h2>
            <Link to="/" className="inner-section-go-back-link"><ArrowReturnLeft /> {tt("global.goBack")}</Link>
        </div>
      </div>
    </section>
  )
}

export default transition(Cursos);