import { Link } from "react-router-dom"
import Topics from "./Topics"
import transition from "../../helpers/transition"
import InnerSectionTitle from "../InnerSectionTitle"
import InnerSectionSubtitle from "../InnerSectionSubtitle"
import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslation } from "react-i18next"


const ReviewsCH = () => {

  const [tt, i18n] = useTranslation("global");

  useEffect(() => {
    document.title = 'Carpi Coder | ' + tt("pages.reviews");
  }, [i18n.language]);

  const courseRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    
    courseRef.current.forEach((course, index) => {
      gsap.from(course, {
        opacity: 0,
        scale: 0,
        translateY: Math.floor(Math.random() * 401) - 200,
        ease: "back.out(2)",
        delay: (.15 * index) + .6,
      })
    });

  }, [i18n.language])
  
  return (
    <section className="reviews inner-section">
      <div className="container">
        <InnerSectionTitle text={tt("reviews.title")} key={i18n.language} />
        <InnerSectionSubtitle text={tt("reviews.subtitle")}/>
        <div className="course-reviews">
          <article className="course-review" ref={element => {courseRef.current[0] = element;}}>
            <h2>{tt("reviews.courses.webDevelopment.title")}</h2>
            <Topics topics={tt("reviews.courses.webDevelopment.topics", { returnObjects: true })} />
            <div className="buttons">
              <Link to="/repasos-coderhouse/desarrollo-web" className="button button-orange">{tt("reviews.goToButton")}</Link>
            </div>
          </article>
          <article className="course-review" ref={element => {courseRef.current[1] = element;}}>
            <h2>{tt("reviews.courses.javascript.title")}</h2>
            <Topics topics={tt("reviews.courses.javascript.topics", { returnObjects: true })} />
            <div className="buttons">
              <Link to="/repasos-coderhouse/javascript" className="button button-orange">{tt("reviews.goToButton")}</Link>
            </div>
          </article>
          <article className="course-review" ref={element => {courseRef.current[2] = element;}}>
            <h2>{tt("reviews.courses.react.title")}</h2>
            <Topics topics={tt("reviews.courses.react.topics", { returnObjects: true })} />
            <div className="buttons">
              <Link to="/repasos-coderhouse/react" className="button button-orange">{tt("reviews.goToButton")}</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}



export default transition(ReviewsCH);