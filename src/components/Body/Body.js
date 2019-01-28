import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'
import 'codemirror/mode/dart/dart'



import Button from '../Button/Button.js'


import './Body.css';
import TextField from "../TextField/TextField";

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFocused: false,
            language: 'none',
        }
        this.changeFocus.bind(this)
    }

    changeFocus = function() {
        this.setState({isFocused: !this.state.isFocused});
    };
    changeLanguage = function(mode) {
        this.setState({language: mode});
    }
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
                        <Button className={`selector ${ this.state.language == 'none' ? 'selector-selected' : null}`} onClick={this.changeLanguage.bind(this, 'none')} color={"white"} materialIcon={""} text={"None"}/>
                        <Button className={`selector ${ this.state.language == 'javascript' ? 'selector-selected' : null}`} onClick={this.changeLanguage.bind(this, 'javascript')} color={"white"} materialIcon={""} text={"JavaScript"}/>
                        <Button className={`selector ${ this.state.language == 'python' ? 'selector-selected' : null}`} onClick={this.changeLanguage.bind(this, 'python')} color={"white"} materialIcon={""} text={"Python"}/>
                        <Button className={`selector ${ this.state.language == 'dart' ? 'selector-selected' : null}`} onClick={this.changeLanguage.bind(this, 'dart')} color={"white"} materialIcon={""} text={"Dart"}/>
                        <Button className={`selector ${ this.state.language == 'clike' ? 'selector-selected' : null}`} onClick={this.changeLanguage.bind(this, 'clike')} color={"white"} materialIcon={""} text={"Java"}/>
                    </div>
                    <div className={`form-code ${this.state.isFocused ? 'form-code-focus': null }`}>
                        <CodeMirror ref={(c) => this.cm = c} FocusChange={this.changeFocus.bind(this)} className={'code-input'} options={{lineNumbers: true, mode: this.state.language}} />
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