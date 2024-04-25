import { useState } from "react";
import playIcon from "../../assets/play-icon.png";
import { BoxArrowUpRight } from 'react-bootstrap-icons';

const CHVideo = ({video}) => {

  return (
    <div className="video" key={video.id} id={video.id}>
        <a href={`https://youtu.be/${video.id}`} target="_blank" className="video-thumbnail">
            <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} alt={video.title} className="video-thumbnail-picture" />
            {/*<img className="video-thumbnail-play" src={playIcon} alt="Logo de YouTube" />-->*/}
        </a>
        <p className="video-text">
            {video.title}
            <a href={`https://youtu.be/${video.id}`} target="_blank" className="watch-on-youtube">
                Ver en YouTube <BoxArrowUpRight />
            </a>
        </p>
        {video.featured && <span className="featured">Súper recomendado 🤙</span>}
    </div>
  )
}

export default CHVideo