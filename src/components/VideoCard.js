import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";
//import { Link } from 'react-router-dom'

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    //TODO: make entire block <Link> to video url
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
