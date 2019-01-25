import React, { Component } from 'react';
import './App.css';
import '../node_modules/material-icons/iconfont/material-icons.css'
import Navbar from './components/Navbar/Navbar.js';

class App extends Component {
  render() {
    return (
        <div className="app">
            <Navbar/>
        </div>
    );
  }
}

export default App;