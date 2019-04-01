import React, { Component } from "react";
import "./style.css"
import { Button, Row} from 'reactstrap';
import axios from 'axios';


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
            return alert("Please Enter a Starting Point and Destination");
        }


        localStorage.setItem("origin", this.state.origin);
        localStorage.setItem("destination", this.state.destination);

        var currentTrip = {
            origin : localStorage.getItem("origin"),
            destination : localStorage.getItem("destination"),
            userId : localStorage.getItem("userId")
        }
        
        if(currentTrip.origin != null && currentTrip.destination != null){
            axios.post("/v1/api/save", currentTrip)
            .then((data2) => {
                this.setState({
                    origin: "",
                    destination: "",
                })
                
            })
        }
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
                        <h3 className="title">Enter your travel information</h3>
                    </Row>
                    <Row className="originRow">
                        <input
                            type="text"
                            name="origin"
                            onChange={(e) => this.handleInputChange(e)}
                            value={this.state.origin}
                            id="mapFormOrigin"
                            placeholder="Starting Point" />
                    </Row>
                    <Row>
                        <input
                            type="text"
                            name="destination"
                            onChange={(e) => this.handleInputChange(e)}
                            value={this.state.destination}
                            id="mapFormDestination"
                            placeholder="Destination"/>
                    </Row>

                    <Row>
                        <Button color="info" id="mainButton"onClick={this.routeChange}>Submit</Button>
                    </Row>

                </div>
            </main >
        );
    };

}

export default Main;
