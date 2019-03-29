import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "./style.css";

class Toogle1 extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle} >Game!</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            {this.props.rules}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default Toogle1;