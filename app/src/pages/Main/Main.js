import React, { Component } from "react";
import "./style.css"
import { Button, Row } from 'reactstrap';
import axios from "axios";

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
        let path = `/trip`;
        this.props.history.push(path);
      }

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

//   handleFormSubmit = (e, formOrigin, formDestination) => {
//         e.stopPropagation();
//         e.nativeEvent.stopImmediatePropagation();

//         var query = "https://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=" + formOrigin + "&wayPoint.2=" + formDestination + "&optimize=time&distanceUnit=mi&key=AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq";

//         axios.get(query).then(res => {

//             var newPins =
//                 [
//                     {
//                         "location": [res.data.resourceSets[0].resources[0].routeLegs[0].actualStart.coordinates[0],
//                         res.data.resourceSets[0].resources[0].routeLegs[0].actualStart.coordinates[1]],
//                         "option": { color: "green" }
//                     },
//                     {
//                         "location": [res.data.resourceSets[0].resources[0].routeLegs[0].actualEnd.coordinates[0],
//                         res.data.resourceSets[0].resources[0].routeLegs[0].actualEnd.coordinates[1]],
//                         "option": { color: "red" }
//                     }
//                 ]

//             this.setState({
//                 pushPins: newPins,
//                 directions: {
//                     inputPanel: "inputPanel",
//                     renderOptions: {
//                         itineraryContainer: "itineraryContainer"
//                     },
//                     requestOptions: {
//                         routeMode: "driving",
//                         maxRoutes: 2
//                     },
//                     wayPoints:
//                         [
//                             {
//                                 address: formOrigin
//                             },
//                             {
//                                 address: formDestination
//                             }
//                         ]
//                 }
//             })

//         }).catch(e => console.log(e))
//     }
   
    render(){
        return(
            <main>
                <div className="container">
                    <Row className="homeHead">
                        <h3 className="title">Enter your travel destination.</h3>
                    </Row>
                    <Row className="test">
                            <input
                                type="text"
                                name="origin"
                                onChange={(e)=>this.handleInputChange(e)}
                                value={this.state.origin}
                                id="mapFormOrigin"
                                placeholder="origin" />
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
                                onChange={(e)=>this.handleInputChange(e)}
                                value={this.state.destination}
                                id="mapFormDestination"
                                placeholder="destination"/>
                    </Row>

                    <Row>
                        <Button color="info" id="main"
                        onClick={this.routeChange}
                         >
                        Submit
                        </Button>
                    </Row>

                </div>
            </main>
        );
    };
}
     
 export default Main;

//  onClick={this.routeChange}

  // handleFormSubmit = (e, formOrigin, formDestination) => {
    //     e.stopPropagation();
    //     e.nativeEvent.stopImmediatePropagation();

    //     var query = "https://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=" + formOrigin + "&wayPoint.2=" + formDestination + "&optimize=time&distanceUnit=mi&key=AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq";

    //     axios.get(query).then(res => {

    //         var newPins =
    //             [
    //                 {
    //                     "location": [res.data.resourceSets[0].resources[0].routeLegs[0].actualStart.coordinates[0],
    //                     res.data.resourceSets[0].resources[0].routeLegs[0].actualStart.coordinates[1]],
    //                     "option": { color: "green" }
    //                 },
    //                 {
    //                     "location": [res.data.resourceSets[0].resources[0].routeLegs[0].actualEnd.coordinates[0],
    //                     res.data.resourceSets[0].resources[0].routeLegs[0].actualEnd.coordinates[1]],
    //                     "option": { color: "red" }
    //                 }
    //             ]

    //         this.setState({
    //             pushPins: newPins,
    //             directions: {
    //                 inputPanel: "inputPanel",
    //                 renderOptions: {
    //                     itineraryContainer: "itineraryContainer"
    //                 },
    //                 requestOptions: {
    //                     routeMode: "driving",
    //                     maxRoutes: 2
    //                 },
    //                 wayPoints:
    //                     [
    //                         {
    //                             address: formOrigin
    //                         },
    //                         {
    //                             address: formDestination
    //                         }
    //                     ]
    //             }
    //         })

    //     }).catch(e => console.log(e))
    // }