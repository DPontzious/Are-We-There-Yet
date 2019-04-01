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
            <Container>
                <Row>
                    <Col>
                        <div className="savedTripsContainer">
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
                                        </tr>
                                    )
                                })
                            }
                        </div >

                    </Col >
                    <Col xs="3">
                        <h1> Helpful Link </h1>
                        {/* <img src="https://us.123rf.com/450wm/yitewang/yitewang1511/yitewang151100467/47556922-stock-vector-hotel-flat-icon.jpg?ver=6" alt="Italian Trulli" className="hotelPhoto"></img> */}
                        <Button onClick={this.handleClick.bind(this)}>Click to Find a Hotel</Button>
                        <Button onClick={this.handleClick.bind(this)}>Click to find a Camp Ground</Button>
                        <Button onClick={this.handleClick.bind(this)}>Click to find a rental card</Button>
                        <Button onClick={this.handleClick.bind(this)}></Button>
                    </Col>
                </Row >

            </Container >
                    
    }
};

export default SavedTrips;