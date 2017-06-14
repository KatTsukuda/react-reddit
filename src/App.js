import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Reddit Abstractor</h2>
        </div>
        <div><Link to="/pancakes">Pancakes</Link></div>
        <div><Link to="/waffles">Waffles</Link></div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
