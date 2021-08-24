import React from 'react';
import './MainArea.css';
import MainVideo from '../MainVideo/MainVideo';
import Video from '../Video/Video';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';

const MainArea = ({ selectedVideo, videos, onVideoSelect, comments, addComment, addLike, addDislike}) => {
    const listOfVideos = videos.map((video, id) => <Video onVideoSelect={onVideoSelect} key={id} video={video} />)

    return (
        <div className="mainArea">
            <div className="mainVideoArea">
                <MainVideo selectedVideo={selectedVideo}/>
                <hr/>
                <h3>{comments.length} Comments</h3>
                <CommentForm addComment={addComment} selectedVideo={selectedVideo}/>
                <Comments comments={comments} addLike={addLike} addDislike={addDislike}/>
            </div>
            <div className="relatedVideoArea">
                {listOfVideos}
            </div>
        </div>
    )
}

export default MainArea;