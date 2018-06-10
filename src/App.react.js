import React, { Component } from 'react';
import LandingPage from './pages/LandingPage.react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <p className="App-intro">
          Contact me at alison.michelle.reed@gmail.com
        </p>
      </div>
    );
  }
}

export default App;