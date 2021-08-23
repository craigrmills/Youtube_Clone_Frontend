import React from 'react';

const MainVideo = ({ selectedVideo }) => {
    if(!selectedVideo) return <div>No Active Video! Try searching for Videos!</div>

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="1000" height="562.5"
                src={videoSrc}
                frameborder="0">
            </iframe>
            <h2>{selectedVideo.snippet.title}</h2>
            <h4>{selectedVideo.snippet.channelTitle}</h4>
            <p>{selectedVideo.snippet.description}</p>
        </div>
    )
}

export default MainVideo;
