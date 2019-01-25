import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            //{this.props.menuState ? 'hello' : null}
            <div className={`toolbar startingMenu ${ this.props.menuState ? 'opened' : 'closed'}`}>
                <h1>Tools -</h1>
                <ul>
                    <li>Code Print</li>
                    <li>Create Test</li>
                </ul>
                <h1>Resources -</h1>
                <ul>
                    <li>Style Guides</li>
                    <li>Best Practices</li>
                    <li>Source Code</li>
                </ul>
                <div className={'toolbar-footer'}>
                    <span>© {(new Date().getFullYear())}</span>
                </div>
            </div>
        );
    }
}

export default Toolbar;