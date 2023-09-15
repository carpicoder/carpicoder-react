import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const Shortcuts = () => {

    const [tt, i18n] = useTranslation("global");

    const scRef = useRef([]);
    gsap.registerPlugin(ScrollTrigger);
    
    useLayoutEffect(() => {

        scRef.current.forEach((shortcut, index) => {
            const endTop = index * -15 + 80;
            gsap.from(shortcut, {
                y: 200,
                opacity: 0,
                ease: "back.out(1)",
                scrollTrigger: {
                    trigger: shortcut,
                    start: "top bottom",
                    end: "top " + endTop + "%",
                    scrub: true
                }
            })

            shortcut.addEventListener("mouseenter", () => {
                gsap.to(shortcut, {
                    scale: 1.15,
                    zIndex: 1,
                    ease: "back.out(3)",
                    duration: .2
                })
            })

            shortcut.addEventListener("mouseleave", () => {
                gsap.to(shortcut, {
                    scale: 1,
                    zIndex: 0,
                    ease: "back.out(3)",
                    duration: .2,
                })
            })
        })
      
    
    }, [])

    return (
        <div className="container">
            <section className="shortcuts">
                <a target="_blank" href="https://youtube.com/carpicoder" className="shortcut shortcut-youtube" ref={element => {scRef.current[0] = element;}}>
                    <h2 className="shortcut-title">{tt("home.shortcuts.youtube.title")}</h2>
                    <p className="shortcut-text">{tt("home.shortcuts.youtube.text")}</p>
                </a>
                <a target="_blank" href="https://discord.gg/wHKxGbMt4A" className="shortcut shortcut-discord" ref={element => {scRef.current[1] = element;}}>
                    <h2 className="shortcut-title">{tt("home.shortcuts.discord.title")}</h2>
                    <p className="shortcut-text">{tt("home.shortcuts.discord.text")}</p>
                </a>
                <Link to="/donaciones" className="shortcut shortcut-donations" ref={element => {scRef.current[2] = element;}}>
                    <h2 className="shortcut-title">{tt("home.shortcuts.donations.title")}</h2>
                    <p className="shortcut-text">{tt("home.shortcuts.donations.text")}</p>
                </Link>
            </section>
        </div>
    )
};

export default Shortcuts;