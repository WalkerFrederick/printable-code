import React, { Component } from 'react';
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
                </div>
            </div>
        );
    }
}

export default Body;