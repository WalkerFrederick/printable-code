import React, { Component } from 'react';
import './Navbar.css';
import Button from '../Button/Button.js';



class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
                <div className="navbar">
                    <div className="nav-left">
                        <h1>printableCode.org</h1>
                    </div>
                    <div className="nav-right">
                        <Button color="green" socialIcon="github" materialIcon="" text="GitHub"></Button>
                        <Button color="green" socialIcon="twitter-alt" materialIcon="" text="Twitter"></Button>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;