import { useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { LangContext } from "../../../context/LanguageContext";
import SplitType from "split-type";

const HeroText = () => {

    const { lang } = useContext(LangContext);

    const heroTitleH1 = useRef(null);
    const heroDescriptionP = useRef();

    useLayoutEffect(() => {


        const docStyle = getComputedStyle(document.documentElement);
        const h1Element = heroTitleH1.current;
        const h1Text = new SplitType(h1Element, {
            types: "words, chars",
            charClass: "title-letter"
        })
        h1Text.chars.forEach((char, index) => {

            gsap.from(char, {
                scale: 0,
                translateY: Math.floor(Math.random() * 601) - 300,
                rotateZ: Math.floor(Math.random() * 601) - 300,
                translateX: Math.floor(Math.random() * 601) - 300,
                ease: "back.out(3)",
                delay: (index * .015) + .5,
                duration: .75
            });
            gsap.from(char, {
                color: "#" + Math.floor(Math.random()*16777215).toString(16),
                delay: ((Math.floor(Math.random() * 16) + 5) / 10) + .25,
                ease: "back.out(3)",
            })


            char.addEventListener("mouseenter", () => {
                gsap.to(char, {
                    translateY: Math.floor(Math.random() * 101) - 110,
                    rotateZ: Math.floor(Math.random() * 101) - 50,
                    translateX: Math.floor(Math.random() * 61) - 30,
                    duration: .5,
                    ease: "back.out",
                    scale: (Math.floor(Math.random() * 8) + 1) * 0.25,
                })
                gsap.to(char, {
                    color: "#" + Math.floor(Math.random()*16777215).toString(16),
                    duration: .1,
                    ease: "back.out",
                })
            })
            char.addEventListener("mouseleave", () => {
                gsap.to(char, {
                    translateY: 0,
                    rotateZ: 0,
                    translateX: 0,
                    delay: .75,
                    duration: .7,
                    ease: "back.out(4)",
                    scale: 1
                })
                gsap.to(char, {
                    color: docStyle.getPropertyValue("--clr-dark"),
                    delay: Math.random() * (3 - 1.5) + 1.5,
                    duration: .5,
                    ease: "back.out",
                })
            })
        });

        
        const pElement = heroDescriptionP.current;
        const pText = new SplitType(pElement, {
            types: "words, chars",
            charClass: "title-letter"
        })

        
        gsap.from(pText.words, {
            opacity: 0,
            translateY: 100,
            stagger: .005,
            delay: .75,
            ease: "back.out(1.5)",
        });

          
    }, [lang])
    


    return (
        <>
            <div className="hero-title">
                <h1 ref={heroTitleH1} >
                    Soy Carpi.<br/>Hago contenido sobre desarrollo web.
                </h1>
            </div>
            <div className="hero-description">
                <p ref={heroDescriptionP}>Aprendí a hacer sitios web por mi cuenta y ahora quiero compartir las herramientas que adquirí a lo largo de los años. Sé que a veces puede ser frustrante y difícil avanzar, por eso creo estos videítos. Mi objetivo es ayudarte a comprender mejor los principales lenguajes de desarrollo frontend y acompañarte en tu camino de aprendizaje.</p>
            </div>
        </>
    )
}

export default HeroText