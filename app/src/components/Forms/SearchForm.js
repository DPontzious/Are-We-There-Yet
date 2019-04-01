import React, { Component } from "react";
import API from "../../utils/API";
import CarDetail from "../../pages/Gas/CarDetails";
import Input from "../Forms/index";
import axios from "axios"
class Events extends Component {
    state = {
        searchEvents: '',
        result: [],
        location: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            {this.state.result ? (
                                // this.state.result.map(result => (
                                //     <CarDetail result={this.state.result} />
                                // ))
                                <CarDetail result={this.state.result} />
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </div>
                    </div>
                    <Input
                        name="loaction"
                        value={this.state.location}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <Button>
                        onClick={this.handleFormSubmit}
                    </Button>
                </div>
            </div >
        );
    }
}
export default Event;