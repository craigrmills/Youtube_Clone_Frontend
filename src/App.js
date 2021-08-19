import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import MainArea from './Components/MainArea/MainArea';
import CommentForm from './Components/CommentForm/CommentForm';


function App() {
  
  return (
    <div className="app">
      <Header/>
      <div className="app__page">
        <SideBar/>
        <MainArea/>
      </div>
      <div className="app__comments">
        <CommentForm />
      </div>
    </div>
  );
}

export default App;
