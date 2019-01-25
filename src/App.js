import React, { Component } from 'react';
import './App.css';
import '../node_modules/material-icons/iconfont/material-icons.css'
import Navbar from './components/Navbar/Navbar.js';
import Toolbar from './components/Toolbar/Toolbar.js';

class App extends Component {
    constructor(){
        super();
        this.state= {
            menuState : false
        }
    }
    openCloseMenu(menuState) {
        this.setState({
            menuState : menuState
        })
    }
  render() {
    return (
        <div className="app">
            <Navbar callback={this.openCloseMenu.bind(this)}/>
            <Toolbar menuState={this.state.menuState}/>
        </div>
    );
  }
}

export default App;
