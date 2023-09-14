import { Link } from "react-router-dom"
import Topics from "./Topics"
import transition from "../../helpers/transition"
import InnerSectionTitle from "../InnerSectionTitle"
import InnerSectionSubtitle from "../InnerSectionSubtitle"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"


const ReviewsCH = () => {

  const courseRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    
    courseRef.current.forEach((course, index) => {
      gsap.from(course, {
        opacity: 0,
        scale: Math.random() * 2,
        x: Math.floor(Math.random() * 401) - 200,
        ease: "back.out(2)",
        delay: .75,
        scrollTrigger: {
          trigger: course
        }
      })
    });

  }, [])
  
  return (
    <section className="reviews inner-section">
      <div className="container">
        <InnerSectionTitle text="Videítos de repaso" />
        <InnerSectionSubtitle text="Si estás cursando en Coderhouse, podés encontrar videítos de repaso de sus cursos acá."/>
        <div className="course-reviews">
          <article className="course-review" ref={element => {courseRef.current[0] = element;}}>
            <h2>Curso de Desarrollo Web</h2>
            <Topics topics={["Prototipado", "HTML", "CSS", "Box Model", "Flexbox", "Grid", "Media queries", "Pseudoclases", "Pseudoelementos", "Transformaciones", "Animaciones", "Bootstrap", "Git", "GitHub", "SASS", "SEO", "Servidores"]} />
            <div className="buttons">
              <Link to="/repasos-coderhouse/desarrollo-web" className="button button-orange">Ir a los videítos del curso</Link>
            </div>
          </article>
          <article className="course-review" ref={element => {courseRef.current[1] = element;}}>
            <h2>Curso de JavaScript</h2>
            <Topics topics={["Variables", "Ciclos", "Funciones", "Objetos", "Arrays", "DOM", "Eventos", "LocalStorage", "Librerías", "Asincronía", "Fetch"]} />
            <div className="buttons">
              <Link to="/repasos-coderhouse/javascript" className="button button-orange">Ir a los videítos del curso</Link>
            </div>
          </article>
          <article className="course-review" ref={element => {courseRef.current[2] = element;}}>
            <h2>Curso de React</h2>
            <Topics topics={["JSX", "Componentes", "Promesas", "Asincronía", "APIs", "Hooks", "Routing", "Eventos", "Context", "Firebase"]} />
            <div className="buttons">
              <Link to="/repasos-coderhouse/react" className="button button-orange">Ir a los videítos del curso</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}



export default transition(ReviewsCH);