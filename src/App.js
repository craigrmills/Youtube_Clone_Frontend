import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import RecommendedVideos from './Components/RecommendedVideos/RecommendedVideos';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__page">
        <SideBar/>
        <RecommendedVideos/>
      </div>
    </div>
  );
}

export default App;
