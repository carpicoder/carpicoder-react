import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'

const HeroStats = () => {

    const statRef = useRef([]);

    useLayoutEffect(() => {
      
        gsap.from(statRef.current, {
            y: 200,
            rotateX: 360,
            opacity: 0,
            stagger: .5,
            delay: 1,
            ease: "back.out(2)"
        })
    
    }, [])

    return (

        <div className="hero-stats">
            <div className="hero-stat" ref={element => {statRef.current[0] = element;}}>
                <p className="hero-stat-number">7.7K</p>
                <p className="hero-stat-text">Suscriptores</p>
            </div>
            <div className="hero-stat" ref={element => {statRef.current[1] = element;}}>
                <p className="hero-stat-number">90</p>
                <p className="hero-stat-text">Videos</p>
            </div>
            <div className="hero-stat" ref={element => {statRef.current[2] = element;}}>
                <p className="hero-stat-number">357.7K</p>
                <p className="hero-stat-text">Visualizaciones</p>
            </div>
        </div>
    )
}

export default HeroStats