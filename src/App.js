import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddColorForm from "./components/addColorForm"
import StarRating from "./components/star-rating"

function fun (title, color){
  console.log("----", title, color)
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <AddColorForm fun={fun}></AddColorForm>
        <StarRating ></StarRating>
        </header>
      </div>
    );
  }
}

export default App;
