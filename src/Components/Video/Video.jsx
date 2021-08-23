import React from 'react';
import './Video.css';
import Avatar from '@material-ui/core/Avatar';

const Video = ({ video, onVideoSelect }) => {
    if(!video) return <div></div>

    return (
        <div className="video" onClick={() => onVideoSelect(video)}>
            <img className="video__thumbnail" src={video.snippet.thumbnails.default.url} />
            <div className="video__text">
                <h3>{video.snippet.title}</h3>
                <p className="video__headline">{video.snippet.channelTitle}</p>
            </div>
        </div>
    )
}

export default Video;
