import gsap from 'gsap';
import React, { useLayoutEffect, useRef, useState, useContext } from 'react'
import { LangContext } from '../context/LanguageContext';

const ChangeLanguage = () => {

    const languagesRef = useRef();
    useLayoutEffect(() => {
        gsap.from(languagesRef.current, {
            x: 100,
            opacity: 0,
            ease: "back.out(2)",
            delay: 1.5
          })
    }, [])

    const { lang, setLang } = useContext(LangContext);



  return (
    <div className="languages" ref={languagesRef}>
      <button onClick={() => {lang !== "es" && setLang("es")}}>ES</button>
      |
      <button onClick={() => {lang !== "en" && setLang("en")}}>EN</button>
    </div>
  )
}

export default ChangeLanguage