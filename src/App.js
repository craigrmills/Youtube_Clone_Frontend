import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import RecommendedVideos from './Components/RecommendedVideos/RecommendedVideos';
import CommentForm from './Components/CommentForm/CommentForm';


function App() {
  
  return (
    <div className="app">
      <Header/>
      <div className="app__page">
        <SideBar/>
        <RecommendedVideos/>
        <CommentForm />
      </div>
    </div>
  );
}

export default App;
