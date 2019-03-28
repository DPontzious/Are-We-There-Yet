import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";
import axios from "axios";
import FormInput from "../../components/Forms/input";
import { Button } from 'reactstrap';
import "./style.css";
import { Row, Col } from 'reactstrap';

class Trip extends Component {

    state = {
        pushPins: [],
        mapTypeId: "road",
        destination: "",
        origin: "",
        directions: {}
    }

    handleFormSubmit = (e, formOrigin, formDestination) => {
        e.preventDefault();
        console.log("firesss");

       console.log("clicked");

        this.setState({
            pushPins: [],
            mapTypeId: "road",
            destination: "",
            origin: "",
            directions: {}
        })

        var query = "https://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=" + formOrigin + "&wayPoint.2=" + formDestination + "&optimize=time&distanceUnit=mi&key=AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq";

        axios.get(query).then(res => {

            var newPins =
                [
                    {
                        "location": [res.data.resourceSets[0].resources[0].routeLegs[0].actualStart.coordinates[0],
                        res.data.resourceSets[0].resources[0].routeLegs[0].actualStart.coordinates[1]],
                        "option": { color: "green" }
                    },
                    {
                        "location": [res.data.resourceSets[0].resources[0].routeLegs[0].actualEnd.coordinates[0],
                        res.data.resourceSets[0].resources[0].routeLegs[0].actualEnd.coordinates[1]],
                        "option": { color: "red" }
                    }
                ]

            this.setState({
                pushPins: newPins,
                directions: {
                    requestOptions: {
                        routeMode: "driving",
                        maxRoutes: 2
                    },
                    wayPoints:
                        [
                            {
                                address: formOrigin
                            },
                            {
                                address: formDestination
                            }
                        ]
                }
            })

        }).catch(e => console.log(e))
    }

    render() {
        return (
            <div className="containerDiv">
                <Row>
                    <Col>
                        <ReactBingmaps
                            className="searchmap"
                            bingmapKey="AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq"
                            center={this.state.pushPins.length > 0 ? this.state.pushPins[0].location : []}
                            pushPins={this.state.pushPins}
                            mapTypeId={this.state.mapTypeId}
                            directions={this.state.directions}
                        />
                    </Col>

                    <Col className="test">
                        <Row>
                            <FormInput
                                type="text"
                                name="text"
                                id="mapFormOrigin"
                                placeholder="origin" />
                        </Row>
                        <Row>
                            <FormInput
                                type="text"
                                name="text"
                                id="mapFormDestination"
                                placeholder="destination" />

                        </Row>
                        <Row>
                        <Button color="info" id="mapButton" onClick={(e)=>this.handleFormSubmit(e, this.state.origin, this.state.destination)}>Search</Button>
                        </Row>
                    </Col>
                </Row>
            </div >
        )
    }
};

export default Trip;