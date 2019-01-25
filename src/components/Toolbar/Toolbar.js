import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <h1>Tools -</h1>
                <ul>
                    <li>Print Code</li>
                    <li>Create Test</li>
                </ul>
                <h1>Resources -</h1>
                <ul>
                    <li>Style Guides</li>
                    <li>Best Practices</li>
                    <li>Source Code</li>
                </ul>
            </div>
        );
    }
}

export default Toolbar;