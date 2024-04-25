import React, { useEffect, useState } from 'react'
import InnerSectionSubtitle from '../InnerSectionSubtitle'
import InnerSectionTitle from '../InnerSectionTitle'
import data from "../../data/course_html_css.json"
import { CalendarWeek, CameraVideo, ClipboardCheck, Discord, Speedometer2 } from 'react-bootstrap-icons'
import carpiPicture from "../../assets/carpi-foto-2.png"
import clase01 from "../../assets/dw/clase-01.png"

const CourseHTMLCSS = () => {
  
  return (
    <section className="inner-section course-inner">
      <div className="container">
        <InnerSectionTitle text="Curso de HTML + CSS" />

        <div className="course-inner-grid">
          <div className="course-details">
            <div className="course-detail">
              <img src={carpiPicture} />
              <p>Dictado por Carpi</p>
            </div>
            <div className="course-detail">
              <span className="course-detail-icon"><CameraVideo /></span>
              <p>En vivo</p>
            </div>
            <div className="course-detail">
              <span className="course-detail-icon"><CalendarWeek /></span>
              <p>18 clases - 6 semanas</p>
            </div>
            {/* <div className="course-detail">
              <span className="course-detail-icon"><Speedometer2 /></span>
              <p>Intensivo</p>
            </div> */}
            <div className="course-detail">
              <span className="course-detail-icon"><ClipboardCheck /></span>
              <p>Proyectos reales</p>
            </div>
            <div className="course-detail">
              <span className="course-detail-icon"><Discord /></span>
              <p>Canal de Discord privado</p>
            </div>
          </div>
          <div className="course-about">
            <p>Un curso completísimo, tanto para iniciarse en el mundo del desarrollo web, como para repasar y reordenar conceptos quienes ya tienen conocimientos. Con proyectos reales, prácticas todas las semanas y acompañamiento a diario en un canal de Discord.</p>
            <h2 className="course-about-title mt-1">Acerca del curso</h2>
            <p className="course-about-text">¡Explorá el mundo del Desarrollo Web con este curso! Desde la estructura de una página web con HTML, hasta los estilos con CSS, pasando por Git y GitHub para colaboración en equipo. Cada semana vamos a hacer un nuevo proyecto relacionado con lo que venimos aprendiendo. Con acompañamiento diario a través de Discord para resolver dudas y avanzar juntos. </p>
            <h2 className="course-about-title mt-1">Requisitos</h2>
            <p className="course-about-text">No se necesitan conocimientos previos. Este curso va desde cero.</p>
            <p className="course-about-text">Si ya tenés conocimientos en desarrollo web y querés usarlo para repasar u ordenar los contenidos, ¡también viene súper!</p>
          </div>
        </div>

        <div className="course-program">
          <h2 className="course-program-title">Programa del curso</h2>
          <div className="course-classes">
            <div className="course-class mt-1">
              <img src={clase01} alt="" class="img" />
              <div className="info">
              <h3>Clase 1: Presentación e instalación de herramientas</h3>
              <p>Comenzamos el curso explorando sus objetivos y la dinámica de aprendizaje. Estableceremos expectativas y discutiremos cómo alcanzar tus metas en el desarrollo web.</p>
              </div>
            </div>
            <div className="course-class mt-1">
              <h3>Clase 2: Intro a HTML</h3>
              <p>Nos sumergimos en los fundamentos de HTML, aprendiendo su estructura básica y cómo crear contenido web semántico y accesible.</p>
            </div>
            <div className="course-class mt-1">
              <h3>Clase 3: HTML+</h3>
              <p>Avanzamos más allá de lo básico de HTML, explorando etiquetas semánticas, formularios interactivos, listas ordenadas y desordenadas, y tablas bien estructuradas.</p>
            </div>
            <div className="course-class mt-1">
              <h3>Clase 4: Resolución de actividades en vivo y consultas</h3>
              <p>Aplicaremos lo aprendido en HTML para resolver un desafío práctico en tiempo real, consolidando tu comprensión y habilidades de codificación.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseHTMLCSS