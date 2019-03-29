import React, { Component } from "react";
// import API from "../../utils/API";
import axios from "axios";
// import Event from '../../components/Forms/index'
import SearchEvent from "./SearchEvent"
import { Button, Row, Col } from "reactstrap"
import API from "../../utils/API";
import Toogle1 from "../../components/Toggle/index"
import "./style.css";

class Events extends Component {
    state = {
        searchEvents: '',
        resultEvent: []
    }
    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };
    // handleFormSubmit = event => {

    // componentDidMount = (event, formSearch) => {
    // event.preventDefault();
    // this.setState({
    //     searchEvents: "",
    //     result: []
    // })
    // axios.get("v1/events")
    //     .then(({ data }) => {
    //         console.log(data, "data");
    //         this.setState({ result: data });
    //     })
    //     .catch(err => console.log(err))
    componentDidMount() {
        console.log("helllooooo!")
        axios.get("v1/events")
            .then(res => {
                console.log(res.data.events.event, "data");
                this.setState({ resultEvent: res.data.events.event });
            })
            .catch(err => console.log(err))
    }
    // API.getEvents(this.state.searchEvents)
    //     .then(res => this.setState({ result: res.data }))
    // console.log("data")
    //     .catch(err => console.log(err));


    render() {
        return (
            // <div className="container">
            <Row className="topRow">
                <Col xs="1" />
                <Col xs="1" >
                    <Toogle1
                        rules={"Categories.One person picks a category (ex: Britney Spear’s songs, NFL teams, flavors of La Croix) and everyone takes turns naming something in that category until someone (the loser) is stumped."} />

                    <Toogle1
                        rules={"Alphabet. Take turns going through the alphabet. Each player must find the next letter either on something in the car (like the stereo screen) or license plates, or road signs."} />
                    <Toogle1
                        rules={"Guess the song. Turn the radio on or put your Spotify/CD player on shuffle. Whoever can shout out the name of the song first, wins. (Be sure to cover you your radio screen if it says the song names as they play)."} />
                    <Toogle1
                        rules={"Truth or Car-Contained Dare. A game of truth or dare where all the dares must be something that can be accomplished (safely) in the car."} />


                </Col>
                <Col xs="1">

                    <Toogle1
                        rules={"Deep Questions. Find a long list of good questions to get to know someone and work your way through them. You’ll learn a lot about everyone in the car."} />
                    <Toogle1
                        rules={"Going on a Picnic. This is a story memory game where someone says “I’m going on a picnic and I’m going to bring….” and then lists an item. The next person begins I’m going on a picnic and I’m going to bring….” and must list the first person’s item before adding their own item. The list grows and grows and the first person to not be able to correctly list all the items is the loser (or out, if you have enough people to play in elimination rounds)."} />

                    <Toogle1
                        rules={"I Spy. The road trip classic. One person says “I spy with my little eye…. something” and then vaguely describes something they see, like “I spy something red”. The other players take turn asking yes or no questions until they can guess what the item is."} />
                    <Toogle1
                        rules={""} />
                </Col>
                <Col xs="6" className="back">
                    {this.state.resultEvent.map((event, key) =>
                        <li key={event.id}>{event.title}{event.description}{event.venue_address}</li>
                        // title={event.title}
                        // description={event.description}
                    )
                    }
                </Col>
                <Col xs="3" >
                    <h3>HEllO!!</h3>
                </Col>
            </Row >
            /* <div className="col-md-4">
                    <div className="card">
                        <Search
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </div>
                </div> */
            // </div >
        );
    }
}
export default Events;
