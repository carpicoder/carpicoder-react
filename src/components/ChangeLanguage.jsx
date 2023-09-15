import gsap from 'gsap';
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Translate } from "react-bootstrap-icons";

const ChangeLanguage = ({setMenuActive, menuActive}) => {

  const [tt, i18n] = useTranslation("global");
  const [langMenuActive, setLangMenuActive] = useState(false);

    const languagesRef = useRef();
    useLayoutEffect(() => {
        gsap.from(languagesRef.current, {
            translateY: 100,
            opacity: 0,
            ease: "back.out(2)",
            delay: 1.5
          })
    }, [])

    useLayoutEffect(() => {
        gsap.from(languagesRef.current, {
            translateY: 100,
            opacity: 0,
            ease: "back.out(2)",
            delay: .5
          })
    }, [menuActive])

    const handleChangeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      setMenuActive(false);
      setLangMenuActive(false);
      document.documentElement.lang = lang;
    }

    const handleOpenLangMenu = () => {
      setLangMenuActive(!langMenuActive);
    }



  return (
    <div className="languages" ref={languagesRef}>
      <Translate className='languages-open-menu' onClick={handleOpenLangMenu} />
      <div className={langMenuActive ? "languages-menu active" : "languages-menu"}>
      <button onClick={() => {handleChangeLanguage("es")}} className={i18n.language === "es" ? "active" : undefined}>ES</button>
      <button onClick={() => {handleChangeLanguage("en")}} className={i18n.language === "en" ? "active" : undefined}>EN</button>
      <button onClick={() => {handleChangeLanguage("pt")}} className={i18n.language === "pt" ? "active" : undefined}>PT</button>
      </div>
    </div>
  )
}

export default ChangeLanguage