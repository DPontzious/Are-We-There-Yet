import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";
import axios from "axios";
import { Button, Row, Col } from 'reactstrap';
import "./style.css";

class SavedTrips extends Component {

    state = {
        trips: []
    }

    componentDidMount = () => {
        axios.get("/api/save/" + localStorage.getItem("userId"))
            .then(function (resp) {
                this.setState({ trips: resp.trips })
            })
    }

    render() {
        return (
            <div>
                <h2>Saved Trips</h2>
                <table>
                    <tr>
                        <th>Trip</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Trip Info</th>
                    </tr>
                    {this.state.trips.map((tripObj, tripInd) => {
                        return (
                            <tr>
                                <td>
                                    {tripInd + 1}
                                </td>
                                <td>
                                    {tripObj.origin}
                                </td>
                                <td>
                                    {tripObj.destination}
                                </td>
                                <td>
                                    <button>
                                        View Trip
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
};

export default SavedTrips;