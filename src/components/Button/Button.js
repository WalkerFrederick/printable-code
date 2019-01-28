import React, { Component } from 'react';
import './Button.css';
import SocialLogo from 'social-logos';



class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button onClick={this.props.onClick} className={ `button button-${ this.props.color } ${this.props.className}`}>
                {this.props.materialIcon ? <span className={ `button-icon material-icons`}>{ this.props.materialIcon }</span> : null}
                {this.props.socialIcon ? <SocialLogo className={'button-icon'} icon={this.props.socialIcon} size={ 32 } /> : null}
                <span>{this.props.text}</span>
             </button>
        );
    }
}

export default Button;