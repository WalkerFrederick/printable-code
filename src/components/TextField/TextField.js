import React, {Component} from "react";
import "./TextField.css"

class TextField extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className={"textField"}>
                <input type={"text"} autoComplete={'off'} name={this.props.name} placeholder={this.props.name} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default TextField;