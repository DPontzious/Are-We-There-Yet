import React, { Component } from "react";
import "./style.css"
import { Button, Row, Col } from 'reactstrap';


class Main extends Component {

    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this);
    }

    state = {
        destination: "",
        origin: ""
    }
    routeChange() {
        if (this.state.origin === "" || this.state.destination === "") {
            return alert("Please Enter a Starting Point or Destination");
        }

        localStorage.setItem("origin", this.state.origin);
        localStorage.setItem("destination", this.state.destination);
        let path = `/trip`;
        this.props.history.push(path);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <div className="container">
                    <Row className="homeHead">
                        <h3 className="title">Enter your travel destination.</h3>
                    </Row>
                    <Row className="test">
                        <input
                            type="text"
                            name="origin"
                            onChange={(e) => this.handleInputChange(e)}
                            value={this.state.origin}
                            id="mapFormOrigin"
                            placeholder="Starting Point" />
                        {/* <Input
                            type="text"
                            name="text"
                            id="topInput"
                            placeholder="starting point" /> */}
                    </Row>
                    <Row>
                        {/* <Input
                            type="text"
                            name="text"
                            id="bottomInput"
                            placeholder="destination" /> */}

                        <input
                            type="text"
                            name="destination"
                            onChange={(e) => this.handleInputChange(e)}
                            value={this.state.destination}
                            id="mapFormDestination"
                            placeholder="Destination" />
                    </Row>

                    <Row>
                        <Button color="info" id="main"
                            onClick={this.routeChange}
                        >
                            Submit
                        </Button>
                    </Row>

                </div>
            </main >
        );
    };

}

export default Main;