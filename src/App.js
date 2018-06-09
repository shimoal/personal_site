import React, { Component } from 'react';
import backgroundPhoto from './images/field.jpg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={backgroundPhoto} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my page</h1>
        </header>
        <p className="App-intro">
          Contact me at alison.michelle.reed@gmail.com
        </p>
      </div>
    );
  }
}

export default App;
