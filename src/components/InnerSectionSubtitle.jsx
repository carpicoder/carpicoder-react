import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react'

const InnerSectionSubtitle = ({text}) => {

    const subtitleRef = useRef();
    
    useLayoutEffect(() => {

        const titleElement = subtitleRef.current;

        gsap.from(titleElement, {
            opacity: 0,
            y: -200,
            ease: "back.out(1)",
            delay: .75
        })

    }, [text])

  return (
    <p ref={subtitleRef}>{text}</p>
  )
}

export default InnerSectionSubtitle