import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useTranslation } from "react-i18next";

const HeroText = () => {

    const [tt, i18n] = useTranslation("global");

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
            const colorDelay = ((Math.floor(Math.random() * 16) + 5) / 10) + .25;
            gsap.from(char, {
                color: "#" + Math.floor(Math.random()*16777215).toString(16),
                delay: colorDelay,
                ease: "back.out(3)",
            })
            gsap.to(char, {
                clearProps: "color",
                delay: colorDelay + .1
            })

            function charOnEnter() {
                char.removeEventListener("mouseenter", charOnEnter);

                gsap.to(char, {
                    translateY: -10,
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
                
                const endDelay = Math.random() * (2 - 0.5) + 0.5;
                setTimeout(() => {
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
                        color: docStyle.getPropertyValue("--clr-text"),
                        delay: endDelay,
                        duration: .5,
                        ease: "back.out",
                        onComplete: () => {
                            char.addEventListener("mouseenter", charOnEnter);
                        }
                    })
                }, endDelay + 150);
            }

            char.addEventListener("mouseenter", charOnEnter);
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

          
    }, [i18n.language])
    


    return (
        <>
            <div className="hero-title">
                <h1 ref={heroTitleH1} key={i18n.language}>
                    {tt("home.hero.title1")}<br/>
                    {tt("home.hero.title2")}
                </h1>
            </div>
            <div className="hero-description">
                <p ref={heroDescriptionP} key={i18n.language}>{tt("home.hero.text")}</p>
            </div>
        </>
    )
}

export default HeroText