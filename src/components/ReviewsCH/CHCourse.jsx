import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowReturnLeft } from 'react-bootstrap-icons';
import { searchCHCourseById } from "../../helpers/searchCourse";
import CHVideo from "./CHVideo";
import transition from "../../helpers/transition";
import InnerSectionTitle from "../InnerSectionTitle";
import { useTranslation } from "react-i18next";


const CHCourse = () => {

    const [tt, i18n] = useTranslation("global");

    const [course, setCourse] = useState(null);
    const courseId = useParams().course;

    useEffect(() => {
        searchCHCourseById(courseId)
            .then((res) => {
                setCourse(res);
            })
    }, [courseId]);

    
    useEffect(() => {
        document.title = course ? 'Carpi Coder | ' + course.titleFull : 'Carpi Coder | Videítos de repaso';
    }, [course]);

    


  return (
    <section className="reviews inner-section">
      <div className="container">
        {
            course ?
            <>
                <Link to="/repasos-coderhouse" className="inner-section-go-back-link"><ArrowReturnLeft /> Videítos de repaso</Link>
                <InnerSectionTitle text={course && course.titleFull} />
                { course.classes.map((courseClass) => {
                    return (
                        <article className="class" id={courseClass.id} key={courseClass.id}>
                            <h2 className="class-title">{courseClass.title}</h2>
                            <div className="class-videos">
                            {
                                courseClass.videos.map((video) => {
                                    return (
                                        <CHVideo video={video} key={video.id} />
                                    )
                                })
                            }
                            </div>
                        </article>
                    )
                })}
            </> :
            <>
                <div className="not-found">
                    <h1>{tt("global.courseNotFound")}</h1>
                    <p>{tt("global.courseWriteToMe")}</p>
                    <Link to="/repasos-coderhouse" className="inner-section-go-back-link"><ArrowReturnLeft /> {tt("global.goBack")}</Link>
                </div>
            </>
        }
      </div>
    </section>
  )
}

export default transition(CHCourse);