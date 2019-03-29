import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import "./style.css";

class input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { start: "", destination: "" };
    };


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (

            <input
                type={this.props.type}
                name={this.props.name}
                id={this.props.id}
                placeholder={this.props.placeholder} />

        );
    }
}
export default input;