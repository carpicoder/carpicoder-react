import { useLayoutEffect, useRef, useState } from "react";
import carpiPicture from "../../../assets/carpi-foto.png";
import carpiPicture2 from "../../../assets/carpi-foto-2.png";
import gsap from "gsap";

const HeroAvatar = () => {

    const [isHovered, setIsHovered] = useState(false);
  
    const avatarBackground = useRef();
    const avatarPicture = useRef();
  
    useLayoutEffect(() => {
      gsap.from(avatarBackground.current, {
        scale: 0,
        rotate: -360,
        delay: 1.3,
        duration: .65,
        ease: "back.out(2)"
      });
      gsap.from(avatarPicture.current, {
        scale: 0,
        rotateZ: 150,
        delay: 1,
        duration: .75,
        ease: "back.out(2)"
      });
  
    }, []);
  
    const handleAvatarContainerEnter = () => {
      const rotateDegree = Math.random() * 20 - 10;
      gsap.to(avatarBackground.current, .4, {
        scale: .7,
        rotate: (rotateDegree + 180) * -1,
        borderRadius: "3rem",
        delay: .1,
        ease: "back.out(4)",
      })
      gsap.to(avatarPicture.current, .4, {
        scale: 1.1,
        rotate: rotateDegree,
        ease: "back.out(4)",
      })
      setIsHovered(!isHovered);
    };
    const handleAvatarContainerLeave = () => {
      gsap.to(avatarBackground.current, .4, {
        scale: .85,
        rotate: 0,
        borderRadius: "1rem",
        delay: .2,
        ease: "back.out(4)",
      })
      gsap.to(avatarPicture.current, .4, {
        scale: 1,
        ease: "back.out(4)",
      })
      setIsHovered(!isHovered);
    };


  return (
    <div
        className="hero-avatar"
        onMouseEnter={handleAvatarContainerEnter}
        onMouseLeave={handleAvatarContainerLeave}
    >
        <div
        className="hero-avatar-background"
        ref={avatarBackground}
        />
        <img
        src={!isHovered ? carpiPicture : carpiPicture2}
        alt="Carpi"
        className="hero-avatar-picture"
        ref={avatarPicture}
        />
    </div>
  )
}

export default HeroAvatar