import React, { Component } from 'react';
import './Button.css';
import '../../../node_modules/material-icons/iconfont/material-icons.css'

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className={ `button button-${ this.props.color }`}>
                {this.props.icon ? <span className={ `button-icon material-icons`}>{ this.props.icon }</span> : null}
                <span>{this.props.text}</span>
             </button>
        );
    }
}

export default Button;