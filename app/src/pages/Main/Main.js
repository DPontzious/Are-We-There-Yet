import React from "react";
import "./style.css"
import Input from "../../components/Forms/input";
import { Button } from 'reactstrap';


function Main() {
    return (

        <main>
            <div className="container">
                <Row>
                    <h3 className="title">Enter your travel destination.</h3>
                </Row>
                <Row>
                    <Input
                        type="text"
                        name="text"
                        id="topInput"
                        placeholder="starting point" />
                </Row>
                <Row className="test">
                    <Input
                        type="text"
                        name="text"
                        id="bottomInput"
                        placeholder="destination" />
<<<<<<< HEAD
                </Row>
                <Row>
                    <Button
                        id="main"
                        text="Submit" />
                </Row>
=======
                </row>

                <row>
                <Button color="info" id="main">Submit</Button>
                </row>

>>>>>>> ed2b8a083cf031971bd20b1ffa6e13facab3b34f
            </div>
        </main >
    )
}

export default Main;