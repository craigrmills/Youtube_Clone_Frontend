import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import MainArea from './Components/MainArea/MainArea';
import CommentForm from './Components/CommentForm/CommentForm';
import Comments from './Components/Comments/Comments';
import youtube from './api/youtube';
import axios from 'axios';


class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    comments: [],
    // replies: [],
  }
  
  onVideoSelect = (video) => {
    this.getComments(video.id.videoId);
    this.setState({ selectedVideo: video })
    console.log("in onVideoSelect", this.state.comments)
  }

  handleSubmit = async (searchTerm) => {
    try{
      const response = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyCfCjU0VVTtimo5ABfREBBjxL12W_UbLZ8',
          q: searchTerm,
          type: 'video',
        }
      });
      this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
      console.log(response.data.items);
      this.getComments(response.data.items[0].id.videoId);
      console.log("in handleSubmit", response.data.items[0].id.videoId);
    }
    catch(e){
      console.log(e)
    }
    
  }

  getComments = async (videoId) => {
    try{
      const response = await axios.get(`http://127.0.0.1:8000/comments-id/${videoId}/`);
      console.log("after axios", response.data);
      this.setState({comments: response.data});
    }
    catch(e){
      console.log(e)
    }
  }

  addComment = async (comment, videoId) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/comments/`, comment);
      this.getComments(videoId);
    }
    catch(e){
      console.log(e)
    }
  }

  addLike = async(commentId, videoId) => {
    try{
      const response = await axios.patch(`http://127.0.0.1:8000/comments-like/${commentId}/`)
      this.getComments(videoId);
    }
    catch(e){
      console.log(e)
    }
  }

  addDislike = async(commentId, videoId) => {
    try{
      const response = await axios.patch(`http://127.0.0.1:8000/comments-dislike/${commentId}/`)
      this.getComments(videoId);
    }
    catch(e){
      console.log(e)
    }
  }

  // getReplies = async (commentId) => {
  //   try{
  //     const response = await axios.get(`http://127.0.0.1:8000/comments-reply/${commentId}`);
  //     this.setState({replies: response.data})
  //   }
  //   catch(e){
  //     console.log(e)
  //   }
  // }

  render() {
    const { selectedVideo, videos, comments, replies } = this.state;
    console.log(this.state)

    return (
      <div className="app">
        <Header onFormSubmit={this.handleSubmit}/>
        <div className="app__page">
          <SideBar/>
          <MainArea selectedVideo={selectedVideo} videos={videos} onVideoSelect={this.onVideoSelect} comments={comments} addComment={this.addComment}
            addLike={this.addLike} addDislike={this.addDislike}/>
        </div>
      </div>
    );
  }
  
}

export default App;
