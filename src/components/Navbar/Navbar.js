import React, { Component } from 'react';
import './Navbar.css';
import Button from '../Button/Button.js';
import { HamburgerSlider } from 'react-animated-burgers';
import PropTypes from 'prop-types';




class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isActive: undefined};

    }
    toggleMenu() {
            this.props.callback(!this.state.isActive);
    }
    toggleButton = () => {
        this.props.callback(!this.state.isActive);
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render() {
        return (
            <div className={"nav-outer"}>
                <div onClick={this.toggleButton} className={`background ${ this.state.isActive ? 'backgroundShow' : 'backgroundHidden'}`}></div>
                <nav className='nav'>
                    <div className="navbar">
                        <div className="nav-left">
                            <div onClick={this.toggleMenu.bind(this)}>
                                <HamburgerSlider className={"hamburger"} isActive={this.state.isActive} toggleButton={this.toggleButton} barColor="white" />
                            </div>
                            <h1>printableCode.org</h1>
                        </div>
                        <div className="nav-right">
                            <Button onClick={function () {
                                window.open('https://github.com/walkerfrederick',"_blank")
                            }} color="green" socialIcon="github" materialIcon="" text="GitHub"/>
                            <Button onClick={function () {
                                window.open('https://twitter.com/WFrederickTweet',"_blank")
                            }} color="green" socialIcon="twitter-alt" materialIcon="" text="Twitter"/>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Navbar.protoTypes = {
    callback : PropTypes.func,
}

export default Navbar;