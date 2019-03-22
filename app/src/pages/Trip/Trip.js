import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";
import axios from "axios";
import FilledTextFields from "../../components/Forms/Input.js";
import "./style.css";
var lat = 35.0278;
var long = -111.0222;


class Trip extends Component {
    // https://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=,&wayPoint.2=,&optimize=time&distanceUnit=mi&key=AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq
    state = {
        pushPins: [
            {
                "location": ["45.511792",
                    "-122.675632"],
                "option": { color: "green" }
            },
            {
                "location": ["45.511792",
                    "-122.675632"],
                "option": { color: "red" }
            }
        ],
        mapTypeId: "road",
        destCity: "",
        destState: "",
        originCity: "",
        originState: ""
    }

    handleFormSubmit = () => {

        var query = "https://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=Portland,OR&wayPoint.2=Portland,ME&optimize=time&distanceUnit=mi&key=AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq";

        // var query = "https://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=" + this.state.originCity + "," + this.state.originState + "&wayPoint.2=" + this.state.destCity + "," + this.state.destState + "&optimize=time&distanceUnit=mi&key=AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq";
        console.log(query)

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


            console.log(res)
            console.log(newPins)
            this.setState({
                pushPins: newPins
            })


        }).catch(e => console.log(e))
    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div id="mapTarget">
                    <ReactBingmaps
                        className="searchmap" bingmapKey="AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq"
                        center={this.state.pushPins.length > 0 ? this.state.pushPins[0].location : null}
                        pushPins={this.state.pushPins}
                        mapTypeId={this.state.mapTypeId}
                    />
                </div>
                {/* <div id="myMap" style='position:relative;width:600px;height:400px;'></div> */}
                <form>
                    <FilledTextFields></FilledTextFields>
                </form>
                <button onClick={() => this.handleFormSubmit()}>Search by Destination</button>
            </div >
        )
    }
};

export default Trip;