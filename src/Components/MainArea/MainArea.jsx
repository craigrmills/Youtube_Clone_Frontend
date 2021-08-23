import React from 'react';
import './MainArea.css';
import MainVideo from '../MainVideo/MainVideo';
import Video from '../Video/Video';

const MainArea = ({ selectedVideo, videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <Video onVideoSelect={onVideoSelect} key={id} video={video} />)

    return (
        <div className="mainArea">
            <div className="mainVideoArea">
                <MainVideo selectedVideo={selectedVideo}/>
            </div>
            <div className="relatedVideoArea">
                {/* <Video video={videos[1]} onVideoSelect={onVideoSelect}/>
                <Video video={videos[1]} onVideoSelect={onVideoSelect}/>
                <Video video={videos[2]} onVideoSelect={onVideoSelect}/>
                <Video video={videos[3]} onVideoSelect={onVideoSelect}/>
                <Video video={videos[4]} onVideoSelect={onVideoSelect}/> */}
                {listOfVideos}
            </div>
        </div>
    )
}

export default MainArea;
