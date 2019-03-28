import React from "react";
import "./style.css"
import Input from "../../components/Forms/Input";
import { Button, Row, Col } from 'reactstrap';



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
                    <Button id="main" color="info"  >Submit</Button>

                </Row>
            </div>
        </main >
    )
}

export default Main;