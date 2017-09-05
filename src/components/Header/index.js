// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  
  myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

  render() {
    return (
      <div className="topnav" id="topNavigation">
        <a className="topnav-logo"><img src="" alt="FYM logo"/></a>
        <a href="#">Contact</a>
        <a href="#">Our project</a>
        <a href="#">About us</a>
        <a href="#">Home</a>
        <a href="javascript:void(0);" className="icon" onClick={() => this.myFunction}>&#9776;</a>
      </div>
    );
  }
}

export default App;