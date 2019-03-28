import React from "react";
import "./style.css"
import Input from "../../components/Forms/Input";
import { Button } from 'reactstrap';


function Main() {
    return (

        <main>
            <div className="container">
                <row className="homeHead">
                    <h3 className="title">Enter your travel destination.</h3>
                </row>
                <row className="test">
                    <Input
                        type="text"
                        name="text"
                        id="topInput"
                        placeholder="starting point" />
                </row>
                <row>
                    <Input
                        type="text"
                        name="text"
                        id="bottomInput"
                        placeholder="destination" />
                </row>

                <row>
                <Button color="info" id="main">Submit</Button>
                </row>

            </div>
        </main>
    )
}

export default Main;