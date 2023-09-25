import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MoonStarsFill, SunFill } from "react-bootstrap-icons"

const ColorMode = ({menuActive}) => {

    const initialIsDark = localStorage.getItem('isDark') === 'true';
    const [isDark, setIsDark] = useState(initialIsDark);

    const handleIsDark = () => {
        setIsDark(!isDark);
    }

    
    const colorModeRef = useRef();
    useLayoutEffect(() => {
        gsap.from(colorModeRef.current, {
            translateY: 100,
            opacity: 0,
            ease: "back.out(2)",
            delay: 1.75
          })
    }, [])

    useLayoutEffect(() => {
        gsap.from(colorModeRef.current, {
            translateY: 100,
            opacity: 0,
            ease: "back.out(2)",
            delay: .5
          })
    }, [menuActive])
    
    useEffect(() => {
        if (isDark === true) {
            document.documentElement.classList.add("dark-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
        }
        localStorage.setItem("isDark", isDark);
    }, [isDark])
    
    

  return (
    <button className="color-mode" onClick={handleIsDark} ref={colorModeRef}>
        { isDark ? <SunFill />  : <MoonStarsFill /> }
    </button>
  )
}

export default ColorMode