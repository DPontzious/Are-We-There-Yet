import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";
import axios from "axios";
import { Button, Row, Col } from "reactstrap";
import "./style.css";
class Trip extends Component {
  state = {
    pushPins: [],
    mapTypeId: "road",
    destination: "",
    origin: "",
    directions: {}
  };

  componentDidMount = () => {
    this.setState(
      {
        origin: localStorage.getItem("origin"),
        destination: localStorage.getItem("destination")
      },
      () => this.queryMap()
    );
  };

  queryMap = () => {
    var query =
      "https://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=" +
      this.state.origin +
      "&wayPoint.2=" +
      this.state.destination +
      "&optimize=time&distanceUnit=mi&key=AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq";

    axios
      .get(query)
      .then(res => {
        var newPins = [
          {
            location: [
              res.data.resourceSets[0].resources[0].routeLegs[0].actualStart
                .coordinates[0],
              res.data.resourceSets[0].resources[0].routeLegs[0].actualStart
                .coordinates[1]
            ],
            option: { color: "green" }
          },
          {
            location: [
              res.data.resourceSets[0].resources[0].routeLegs[0].actualEnd
                .coordinates[0],
              res.data.resourceSets[0].resources[0].routeLegs[0].actualEnd
                .coordinates[1]
            ],
            option: { color: "red" }
          }
        ];
        this.setState({
          pushPins: newPins,
          directions: {
            inputPanel: "inputPanel",
            renderOptions: {
              itineraryContainer: "itineraryContainer"
            },
            requestOptions: {
              routeMode: "driving",
              maxRoutes: 2
            },
            wayPoints: [
              {
                address: this.state.origin
              },
              {
                address: this.state.destination
              }
            ]
          }
        });
      })
      .catch(e => console.log(e));
  };
  handleFormSubmit = (e, formOrigin, formDestination) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    var query =
      "https://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=" +
      formOrigin +
      "&wayPoint.2=" +
      formDestination +
      "&optimize=time&distanceUnit=mi&key=AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq";
    axios
      .get(query)
      .then(res => {
        var newPins = [
          {
            location: [
              res.data.resourceSets[0].resources[0].routeLegs[0].actualStart
                .coordinates[0],
              res.data.resourceSets[0].resources[0].routeLegs[0].actualStart
                .coordinates[1]
            ],
            option: { color: "green" }
          },
          {
            location: [
              res.data.resourceSets[0].resources[0].routeLegs[0].actualEnd
                .coordinates[0],
              res.data.resourceSets[0].resources[0].routeLegs[0].actualEnd
                .coordinates[1]
            ],
            option: { color: "red" }
          }
        ];
        this.setState({
          pushPins: newPins,
          directions: {
            inputPanel: "inputPanel",
            renderOptions: {
              itineraryContainer: "itineraryContainer"
            },
            requestOptions: {
              routeMode: "driving",
              maxRoutes: 2
            },
            wayPoints: [
              {
                address: formOrigin
              },
              {
                address: formDestination
              }
            ]
          }
        });
      })
      .catch(e => console.log(e));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="containerDiv">
        <Row>
          <Col>
            <ReactBingmaps
              className="searchmap"
              bingmapKey="AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq"
              center={
                this.state.pushPins.length > 0
                  ? this.state.pushPins[0].location
                  : []
              }
              pushPins={this.state.pushPins}
              mapTypeId={this.state.mapTypeId}
              directions={this.state.directions}
            />
          </Col>
          <Col id="itineraryCol">
            <div className="itinerary-container" id="itineraryContainer" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Row>
              <h5 id="searchTitle">Search For Another City</h5>
            </Row>
            <Row>
              <input
                type="text"
                name="origin"
                onChange={e => this.handleInputChange(e)}
                value={this.state.origin}
                id="mapFormOrigin"
                placeholder="Starting point"
              />
            </Row>
            <br />
            <Row>
              <input
                type="text"
                name="destination"
                onChange={e => this.handleInputChange(e)}
                value={this.state.destination}
                id="mapFormDestination"
                placeholder="Destination"
              />
            </Row>
            <br />
            <Row>
              <Button
                color="info"
                id="mapButton"
                onClick={e =>
                  this.handleFormSubmit(
                    e,
                    this.state.origin,
                    this.state.destination
                  )
                }
              >
                Search
              </Button>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Trip;
