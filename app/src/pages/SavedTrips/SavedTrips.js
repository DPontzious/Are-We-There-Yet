import React, { Component } from "react";
// import { ReactBingmaps } from "react-bingmaps";
import axios from "axios";
import { Button, Row, Col, Container } from 'reactstrap';
import "./style.css";

class SavedTrips extends Component {

    state = {
        trips: []
    }

    componentDidMount = () => {
        if (!localStorage.getItem("token")) {
            this.props.history.replace("/")
        }


        axios.get("/v1/api/save/" + localStorage.getItem("userId"))
            .then((resp) => {
                this.setState({ trips: resp.data })
            })
    }
    handleClick() {
        window.location.assign('http://groupon.com');
    }

    render() {
        return (
            <div className="savedTripsContainer">
                {/* <Container> */}
                <Row>
                    <Col xs="7" className="testestest">
                        <p className="titleSavedTrips">SAVED TRIPS</p>
                        {
                            this.state.trips.map((tripObj, tripInd) => {
                                const dataArray = tripObj.split(":");
                                return (
                                    <tr>
                                        <td>
                                            {tripInd + 1}
                                        </td>
                                        <td>
                                            {dataArray[0]}
                                        </td>
                                        <td>
                                            {dataArray[1]}
                                        </td>
                                        <td>
                                            <Button>
                                                View Trip
                                    </Button>

                                        </td>
                                        <td>
                                            <Button>
                                                Delete Trip
                                    </Button>

                                        </td>
                                    </tr>
                                )
                            })}
                    </Col >
                    <Col xs="3">
                        <h1> Helpful Link </h1>
                        <a href="http://hotels.com">
                            <img border="0" alt="W3Schools" src="http://worldartsme.com/images/hotel-sign-clipart-1.jpg" width="100" height="100" margin-bottom="10px"></img></a>
                        <a href="https://banana-cake-18419.herokuapp.com/">
                            <img border="0" alt="W3Schools" src="http://images.clipartpanda.com/camp-clipart-black-and-white-1218784895192777147geant_Pictogramme_Camping.svg.hi.png" width="100" height="100"></img></a>
                        <a href="http://enterprise.com">
                            <img border="0" alt="W3Schools" src="http://www.clker.com/cliparts/a/Y/q/g/B/G/simple-black-car-md.png" width="100" height="100"></img></a>
                        <a href="http://chevron.com">
                            <img border="0" alt="W3Schools" src="https://images.all-free-download.com/images/graphiclarge/gas_pump_clip_art_17082.jpg" width="100" height="100"></img></a>
                    </Col>
                </Row >
                {/* </Container > */}
            </div >
        )
    }
};

export default SavedTrips;