import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import MainArea from './Components/MainArea/MainArea';
import CommentForm from './Components/CommentForm/CommentForm';
import youtube from './api/youtube';


class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }
  
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  handleSubmit = async (searchTerm) => {
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
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div className="app">
        <Header onFormSubmit={this.handleSubmit}/>
        <div className="app__page">
          <SideBar/>
          <MainArea selectedVideo={selectedVideo} videos={videos} onVideoSelect={this.onVideoSelect}/>
        </div>
        <div className="app__comments">
          <CommentForm />
        </div>
      </div>
    );
  }
  
}

export default App;
