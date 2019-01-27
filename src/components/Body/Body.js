import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';


import './Body.css';
import TextField from "../TextField/TextField";

class Body extends Component {
    render() {
        return (
            <div className={"body"}>
                <div className={'inner-body'}>
                    <h1 className={"page-title"} >{this.props.title} -</h1>
                    <div className={"form-top"}>
                        <TextField name={"Title"}/>
                        <TextField name={"Author"}/>
                    </div>
                    <div className={"form-code"}>
                        <CodeMirror options={{lineNumbers: true,}} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;