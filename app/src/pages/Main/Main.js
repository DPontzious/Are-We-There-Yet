import React from "react";
import "./style.css"
import Input from "../../components/Forms/input";
import Button from "../../components/button/button";
import { Container, Row, Col } from 'reactstrap';


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
                </Row>
                <Row>
                    <Button
                        id="main"
                        text="Submit" />
                </Row>
            </div>
        </main >
    )
}

export default Main;