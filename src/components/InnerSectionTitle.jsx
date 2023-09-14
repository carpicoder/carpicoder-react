import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react'
import SplitType from 'split-type';

const InnerSectionTitle = ({text}) => {

    const titleRef = useRef();
    
    useLayoutEffect(() => {

        const titleElement = titleRef.current;

        const titleText = new SplitType(titleElement, {
            types: "words, chars",
            charClass: "title-letter"
        })


        titleText.chars.forEach((char, index) => {

            gsap.from(char, {
                opacity: 0,
                translateY: Math.floor(Math.random() * 101) - 110,
                rotateZ: Math.floor(Math.random() * 101) - 50,
                translateX: Math.floor(Math.random() * 61) - 30,
                ease: "back.out(3)",
                delay: (index * .015) + .5
            });

            char.addEventListener("mouseenter", () => {
                gsap.to(char, {
                    translateY: Math.floor(Math.random() * 101) - 110,
                    rotateZ: Math.floor(Math.random() * 101) - 50,
                    translateX: Math.floor(Math.random() * 61) - 30,
                    duration: .5,
                    ease: "back.out",
                })
            })
            char.addEventListener("mouseleave", () => {
                gsap.to(char, {
                    translateY: 0,
                    rotateZ: 0,
                    translateX: 0,
                    delay: 0.5,
                    duration: .7,
                    ease: "back.out(4)",
                })
            })
        });

    }, [text])

  return (
    <h1 className="inner-section-title" ref={titleRef}>{text}</h1>
  )
}

export default InnerSectionTitle