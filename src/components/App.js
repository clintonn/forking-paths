import React, { Component } from 'react';
import logo from '../logo.svg';
import fork from '../fork.jpg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={fork} className="App-logo" alt="logo" />
          <h2>Welcome to Forking Paths</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
