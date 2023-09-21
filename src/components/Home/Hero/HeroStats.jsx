import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { youtubeKey, youtubeUser } from '../../../helpers/subs';

const HeroStats = () => {

    const [tt, i18n] = useTranslation("global");

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
    
    }, [i18n.language])

    
    const [subsData, setSubsData] = useState(null);
    let SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];
    function abbreviateNumber(number){
        var tier = Math.log10(Math.abs(number)) / 3 | 0;
        if(tier == 0) return number;
        var suffix = SI_SYMBOL[tier];
        var scale = Math.pow(10, tier * 3);
        var scaled = number / scale;
        return scaled.toFixed(1) + suffix;
    }
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.items) {
                setSubsData({
                    subCount: abbreviateNumber(data.items[0].statistics.subscriberCount),
                    videoCount: abbreviateNumber(data.items[0].statistics.videoCount),
                    viewCount: abbreviateNumber(data.items[0].statistics.viewCount)
                })
            } else {
                setSubsData({
                    subCount: "+8K",
                    videoCount: "+90",
                    viewCount: "+350K"
                })
            }
        })
    }, [])


    return (

        <div className="hero-stats">
            <div className="hero-stat" ref={element => {statRef.current[0] = element;}}>
                <p className="hero-stat-number">{subsData ? subsData.subCount : "8K"}</p>
                <p className="hero-stat-text">{tt("home.stats.subscribers")}</p>
            </div>
            <div className="hero-stat" ref={element => {statRef.current[1] = element;}}>
                <p className="hero-stat-number">{subsData ? subsData.videoCount : "90"}</p>
                <p className="hero-stat-text">{tt("home.stats.videos")}</p>
            </div>
            <div className="hero-stat" ref={element => {statRef.current[2] = element;}}>
                <p className="hero-stat-number">{subsData ? subsData.viewCount : "350K"}</p>
                <p className="hero-stat-text">{tt("home.stats.views")}</p>
            </div>
        </div>
    )
}

export default HeroStats