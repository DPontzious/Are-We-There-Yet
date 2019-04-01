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
        if(!localStorage.getItem("token")){
            this.props.history.replace("/")
        }


        axios.get("/v1/api/save/" + localStorage.getItem("userId"))
            .then((resp) =>{
                console.log(resp, "yayayayya")
                this.setState({ trips: resp.data })
            })
    }

    render() {
        return (
            <div className="savedTripsContainer">
                <h2>Saved Trips</h2>
                <table>
                    <tr>
                        <th>Trip</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Trip Info</th>
                    </tr>
                    <tbody>

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
                    </tbody>
                </table>
            </div>
        )
    }
};

export default SavedTrips;