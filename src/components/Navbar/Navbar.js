import React, { Component } from 'react';
import './Navbar.css';
import Button from '../Button/Button.js';



class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
                <div className="navbar">
                    <div className="nav-left">
                        printableCode.org
                    </div>
                    <div className="nav-right">
                        <Button color="blue" socialIcon="github" materialIcon="" text="GitHub"></Button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;