import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const ChangeLanguage = () => {
    const [tt, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    const languagesRef = useRef();

    useLayoutEffect(() => {
        gsap.from(languagesRef.current, {
            x: 100,
            opacity: 0,
            ease: "back.out(2)",
            delay: 1.5
          })
    }, [])

  return (
    <div className="languages" ref={languagesRef}>
      <button onClick={() => {handleChangeLanguage("es")}} className={i18n.language === "es" ? "active" : undefined}>ES</button>
      |
      <button onClick={() => {handleChangeLanguage("en")}} className={i18n.language === "en" ? "active" : undefined}>EN</button>
    </div>
  )
}

export default ChangeLanguage