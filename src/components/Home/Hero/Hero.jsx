import HeroAvatar from "./HeroAvatar";
import HeroStats from "./HeroStats";
import HeroText from "./HeroText";

const Hero = ({headerHeight}) => {
  
    return (
       <div className="container">
          <div className="hero" style={{minHeight: "calc(100vh - " + headerHeight + "px)",}}>
            <HeroAvatar />
            <HeroText />
            <HeroStats />
          </div>
       </div>
    )
};

export default Hero;