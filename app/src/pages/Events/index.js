import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";
// import Event from '../../components/Forms/index'
import SearchEvent from "./SearchEvent"


class Events extends Component {
    state = {
        searchEvents: '',
        result: []
    }
    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };
    // handleFormSubmit = (event, formSearch) => {
    componentDidMount = (event, formSearch) => {
        // event.preventDefault();
        this.setState({
            searchEvents: "",
            result: []
        })
        console.log("helllooooo!")
        axios.get("v1/events")
            .then(({ data }) => {
                console.log(data.events.event);
                this.setState({ result: data });
            })
            .catch(err => console.log(err))
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
                                <SearchEvent result={this.state.result}
                                    key={this.state.result} />
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                            <div className="card">
                                <Search
                                    value={this.state.search}
                                    handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                />
                            </div>
                        </div> */}
                </div>
            </div >
        );
    }
}
export default Events;