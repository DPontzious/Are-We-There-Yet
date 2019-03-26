import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";
import axios from "axios";
import FilledTextFields from "../../components/Forms/Input.js";
import "./style.css";


// import { React, Component } from "react";



// class Trip extends Component(props) {

//     handleFormSubmit() {
//         // api bing zip search
//         // then update map
//     }
//     componentDidMount() {
//         var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
//         var location = new Microsoft.Maps.Location(35.0278, -111.0222);
//         var pushpin = new Microsoft.Maps.Pushpin(location, { color: 'green' });
//         var zipLocation;

//         //push the pin onto the map
//         map.entities.push(pushpin);

//         //the setView function is a bing maps function for setting the center of the map view
//         map.setView({
//             //changes the type of map
//             mapTypeId: Microsoft.Maps.MapTypeId.aerial,
//             //sets the center
//             center: new Microsoft.Maps.Location(35.027222, -111.0225),
//             //sets the zoom
//             zoom: 15
//         });

//     }

//     render() {
//         <div>
//             <div id="myMap"></div>
//             <form>
//                 {/* more code */}
//                 <button onClick={() => handleFormSubmit()}></button>
//             </form>
//             {/* everything else: form (zip), table, etc. */}
// import Gas from "../../components/Forms/Input"
// import { format } from "url";
// function Trip() {
//     return (
//         <div>
//             <Gas components={Gas} />
//             <h1>Hello, testing Trip</h1>
//         </div>
//     }
// };


//     )
// }

// export default Trip;

var lat = 35.0278;
var long = -111.0222;

// class Trip extends Component(props) {

class Trip extends Component {

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
        destination: "",
        origin: "",
        directions: {}
    }

    handleFormSubmit = (e, formOrigin, formDestination) => {
        e.preventDefault();
        console.log(formDestination)
        console.log(formOrigin)

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

            console.log(res)
            console.log(newPins)

            this.setState({
                pushPins: newPins,
                directions: {
                    requestOptions: {
                        routeMode: "driving",
                        maxRoutes: 2
                    },
                    wayPoints: [{
                        address: formOrigin
                    },
                    { address: formDestination }
                    ]
                }
            })

        }).catch(e => console.log(e))
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
                        directions={this.state.directions}
                    />
                </div>
                <form>
                    <FilledTextFields
                        clickSearch={this.handleFormSubmit}
                    ></FilledTextFields>
                </form>
            </div >
        )
    }
};

export default Trip;

