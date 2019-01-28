import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript'

import Button from '../Button/Button.js'


import './Body.css';
import TextField from "../TextField/TextField";

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFocused: false,
        }
        this.changeFocus.bind(this)
    }

    changeFocus = function() {
        this.setState({isFocused: !this.state.isFocused});
    };

    componentDidMount() {
        let myCodeMirror = this.cm.getCodeMirror()
        myCodeMirror.setSize(null, '100%')
    }

    render() {
        return (
            <div className={"body"}>
                <div className={'inner-body'}>
                    <h1 className={"page-title"} >{this.props.title} -</h1>
                    <div className={"form-top"}>
                        <TextField name={"Title"}/>
                        <TextField name={"Author"}/>
                    </div>
                    <div className={"form-selector"}>

                    </div>
                    <div className={`form-code ${this.state.isFocused ? 'form-code-focus': null }`}>
                        <CodeMirror ref={(c) => this.cm = c} FocusChange={this.changeFocus.bind(this)} className={'code-input'} options={{lineNumbers: true, mode: 'javascript'}} />
                    </div>
                    <div className={'form-bottom'}>
                        <Button onClick={function () {
                            window.print()
                        }} color={"blue"} materialIcon={"print"} text={"Print"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;