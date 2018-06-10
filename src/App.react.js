import React, { Component } from 'react';
import LandingPage from './pages/LandingPage.react';
import WorkPage from './pages/WorkPage.react';
import ContactPage from './pages/ContactPage.react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <WorkPage />
        <ContactPage />
      </div>
    );
  }
}

export default App;
