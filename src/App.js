import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Reddit Abstractor</h1>
          <ul>
          <li><Link to="/corgis">Corgis</Link></li>
          <li><Link to="/pies">Pies</Link></li>
          <li><Link to="/polarbears">Polar Bears</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
