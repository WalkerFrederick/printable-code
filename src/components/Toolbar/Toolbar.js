import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            //{this.props.menuState ? 'hello' : null}
            <div className={`toolbar startingMenu ${ this.props.menuState ? 'opened' : 'closed'}`}>
                <h1>Tools -</h1>
                <ul>
                    <li>Print Code</li>
                    <li>More Coming Soon</li>
                </ul>
                <h1>Resources -</h1>
                <ul>
                    <li onClick={function () {
                        window.open("https://walkerfrederick.com", "_blank")
                    }}>Author's Blog</li>
                    <li onClick={function () {
                        window.open("https://github.com/WalkerFrederick/printable-code", "_blank")
                    }}>Source Code</li>
                </ul>
                <div className={'toolbar-footer'}>
                    <span>© {(new Date().getFullYear())}</span>
                </div>
            </div>
        );
    }
}

export default Toolbar;