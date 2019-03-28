import React from "react";
import "./style.css"
import Input from "../../components/Forms/input";
import Button from "../../components/button/button";
import PropTypes from 'prop-types';


function Main() {
    return (

        <main>
            <div className="container">
                <row className="homeHead">
                    <h3 className="title">Enter the city you are traveling to below</h3>
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
                    <Button 
                        id="main"
                        text="Submit" />
                        {/* onClick={(e) => this.props.clickSearch(e, this.state.start, this.state.destination)}>Search by Destination</Button> */}
                </row>

            </div>
        </main>
    )
}

export default Main;