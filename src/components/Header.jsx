import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SplitType from "split-type";
import ChangeLanguage from "./ChangeLanguage";
import { List, X } from 'react-bootstrap-icons';
import { useTranslation } from "react-i18next";
import ColorMode from "./ColorMode";



const Header = ({ location }) =>{

  const headerRef = useRef();
  const logoRef = useRef();
  const navItemRef = useRef([]);

  const [tt, i18n] = useTranslation("global");

  const [menuActive, setMenuActive] = useState(false);

  useLayoutEffect(() => {

    gsap.from(headerRef.current, {
      scale: 0,
      ease: "back.out(2)",
      delay: .75
    })

    const docStyle = getComputedStyle(document.documentElement);

    const logoElement = logoRef.current;
    const logoText = new SplitType(logoElement, {
      types: "chars"
    })

    gsap.from(logoText.chars, {
      x: -100,
      opacity: 0,
      ease: "back.out(2)",
      stagger: .02,
      delay: 1
    })
    gsap.from(navItemRef.current, {
      y: -100,
      opacity: 0,
      stagger: .02,
      ease: "back.out(2)",
      delay: 1.25
    })

    logoText.chars.forEach((char) => {

      char.addEventListener("mouseenter", () => {
          gsap.to(char, {
            translateY: -10,
            color: docStyle.getPropertyValue("--clr-primary"),
            duration: .5,
            ease: "back.out",
          })
      })
      char.addEventListener("mouseleave", () => {
          gsap.to(char, {
            translateY: 0,
            delay: .3,
            ease: "back.out(5)",
          })
          gsap.to(char, {
            delay: .4,
            ease: "back.out(1)",
            color: char.textContent !== "." ? docStyle.getPropertyValue("--clr-text") : docStyle.getPropertyValue("--clr-primary"),
          })
          gsap.to(char, {
            clearProps: "color",
            delay: .45
          })
      })
    });

  }, [i18n.language])

  useLayoutEffect(() => {
    gsap.from(navItemRef.current, {
      y: -100,
      opacity: 0,
      stagger: .02,
      ease: "back.out(2)",
      delay: 0
    })
  }, [menuActive])

  const handleClickMenu = () => {
    setMenuActive(!menuActive);
  }

  useEffect(() => {
    setTimeout(() => {
      setMenuActive(false);
    }, 500);
  }, [location])


    return (
       <header className={menuActive ? 'header menu-active' : 'header'} ref={headerRef}>
          <Link to="/" className="header-logo" ref={logoRef}>CarpiCoder<span className="dot">.</span></Link>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item" ref={element => {navItemRef.current[0] = element;}}>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  {tt("header.home")}
                </NavLink>
              </li>
              <li className="nav-item" ref={element => {navItemRef.current[1] = element;}}>
                <NavLink to="/cursos" className="nav-link" data-tooltip={tt("header.soon")}>
                  {tt("header.courses")}
                </NavLink>
              </li>
              <li className="nav-item" ref={element => {navItemRef.current[2] = element;}}>
                <NavLink to="/repasos-coderhouse" className="nav-link" data-tooltip={tt("header.coderhouse")}>
                  {tt("header.reviews")}
                </NavLink>
              </li>
              <li className="nav-item" ref={element => {navItemRef.current[3] = element;}}>
                <NavLink to="/donaciones" className="nav-link">
                  {tt("header.donations")}
                </NavLink>
              </li>
            </ul>
          </nav>
          <List className="open-menu" onClick={handleClickMenu} />
          <X className="close-menu" onClick={handleClickMenu} />
          <div className="header-buttons">
            <ChangeLanguage setMenuActive={setMenuActive} menuActive={menuActive} />
            <ColorMode menuActive={menuActive} />
          </div>
       </header>
    )
};

export default Header;