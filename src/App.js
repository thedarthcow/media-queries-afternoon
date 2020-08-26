import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="content">
        WELCOME TO OUR STUDIO!
    </div>
    <div className="welcome">
        IT'S NICE TO MEET YOU
    </div>

    <div className="nav1">
        START BOOTSTRAP
    </div>
    <div className="tellmemore">
        TELL ME MORE
    </div>


    <div className="nav"> 
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle"/>
        <div className="menu">
            <a href="#">SERVICES</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">ABOUT</a>
            <a href="#">TEAM</a>
            <a href="#">CONTACT</a>

        </div>
    </div> 
    </div>
  );
}

export default App;
