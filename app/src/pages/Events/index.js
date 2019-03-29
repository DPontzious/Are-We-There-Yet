import React, { Component } from "react";
import axios from "axios";
import { Button, Row, Col } from "reactstrap"
import Toogle1 from "../../components/Toggle/index"
import "./style.css";
import Input from "../../components/Forms/Input"

class Events extends Component {
    state = {
        searchEvents: '',
        resultEvent: []
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = () => {
        axios.post("/v1/events", { location: this.state.searchEvents })
            .then(res => {
                // console.log(res.data, "data");
                this.setState({ resultEvent: res.data.events.event });
            })
            .catch(err => console.log(err))
    };
    componentDidMount() {
        console.log("helllooooo!")
        // var destinationVar = localStorage.getItem("destination");
        //testing
        // destinationVar = "Seattle,WA";
        axios.post("v1/events", { location: localStorage.getItem("destination") })
            .then(res => {
                // console.log(res.data.events.event, "data");
                this.setState({ resultEvent: res.data.events.event });
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Row className="topRow">
                <Col xs="1" />
                <Col xs="2" >
                    Click a button for fun road trip games.
                    <Toogle1
                        gameName={"Categories"}
                        rules={"One person picks a category (ex: Britney Spear’s songs, NFL teams, flavors of La Croix) and everyone takes turns naming something in that category until someone (the loser) is stumped."} />
                    <Toogle1
                        gameName={"Alphabet"}
                        rules={". Take turns going through the alphabet. Each player must find the next letter either on something in the car (like the stereo screen) or license plates, or road signs."} />
                    <Toogle1
                        gameName={"Guess the song"}
                        rules={" Turn the radio on or put your Spotify/CD player on shuffle. Whoever can shout out the name of the song first, wins. (Be sure to cover you your radio screen if it says the song names as they play)."} />
                    <Toogle1
                        gameName={"Truth or Car"}
                        rules={"A game of truth or dare where all the dares must be something that can be accomplished (safely) in the car."} />
                    <Toogle1
                        gameName={"Deep Questions"}
                        rules={"Find a long list of good questions to get to know someone and work your way through them. You’ll learn a lot about everyone in the car."} />
                    <Toogle1
                        gameName={"Going on a Picnic"}
                        rules={"This is a story memory game where someone says “I’m going on a picnic and I’m going to bring….” and then lists an item. The next person begins I’m going on a picnic and I’m going to bring….” and must list the first person’s item before adding their own item. The list grows and grows and the first person to not be able to correctly list all the items is the loser (or out, if you have enough people to play in elimination rounds)."} />
                    <Toogle1
                        gameName={"I Spy"}
                        rules={"The road trip classic. One person says “I spy with my little eye…. something” and then vaguely describes something they see, like “I spy something red”. The other players take turn asking yes or no questions until they can guess what the item is."} />
                    <Toogle1
                        gameName={"Story"}
                        rules={"One person says a word that begins a story. Take turns adding one word onto the story and see where it ends up!"} />
                    <Toogle1
                        gameName={"The License Plate Game"}
                        rules={"Interpret the letters in each license plate you pass. For instance, REG could stand for “Ron eats garbage” and CSB could be “Claire smells bad”."} />
                    <Toogle1
                        gameName={"Would You Rather"}
                        rules={"Play an epic game of Would You Rather. Try to stump the other person with the weirdest or most difficult questions you can come up with (or find online)."} />
                </Col>
                <Col xs="6" className="back">
                    <h5>List of Events in the City you searched</h5>
                    {this.state.resultEvent.map((event, key) =>
                        <li key={event.id}>{event.title}{event.description}{event.venue_address}</li>
                    )
                    }
                </Col>
                <Col xs="3" >
                    Search other cities for more events!
                        <input
                        // type="text"
                        name="searchEvents"
                        onChange={(e) => this.handleInputChange(e)}
                        value={this.state.searchEvents}
                    // handleFormSubmit={this.handleFormSubmit}
                    />
                    <Button
                        id="eventButton"
                        onClick={(e) => this.handleFormSubmit(e)}>
                        Clicky Clicky
                    </Button>
                </Col>
            </Row >

        );
    }
}
export default Events;
