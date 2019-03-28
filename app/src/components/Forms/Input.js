import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import "./style.css";
<<<<<<< HEAD
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
=======

class input extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {start: "", destination: "" };
    };
    

    handleChange = name => event => {
        this.setState({
        [name]: event.target.value,
            });
        };

    render()
    {
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
>>>>>>> ed2b8a083cf031971bd20b1ffa6e13facab3b34f
    }
}
export default input;