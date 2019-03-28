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
            <Form>
                <FormGroup>
                    <Input
                        type={this.props.type}
                        name={this.props.name}
                        id={this.props.id}
                        placeholder={this.props.placeholder} />
                </FormGroup>
            </Form>
        );
    }
}
export default input;