import React, { Component } from 'react';
import './App.css';
import '../node_modules/material-icons/iconfont/material-icons.css'
import Navbar from './components/Navbar/Navbar.js';
import Toolbar from './components/Toolbar/Toolbar.js';

class App extends Component {
  render() {
    return (
        <div className="app">
            <Navbar/>
            <Toolbar/>
        </div>
    );
  }
}

export default App;
