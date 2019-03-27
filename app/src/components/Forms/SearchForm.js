import React, { Component } from "react";
import API from "../../utils/API";
import CarDetail from "../../pages/Gas/CarDetails";
import Search from "../../pages/Gas";
import axios from "axios"
class Events extends Component {
    state = {
        searchEvents: '',
        result: []
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        var query = "http://api.eventful.com/json/events/search?&app_key=xrgnP4GQZxFmGt2n&keywords=books&location=San+Diego&date=Future"
        axios.get(query)
            .then(res => {
                console.log(res.data);
                this.setState({ results: res.data });
            })
            .catch(err => console.log(err))
    }
    // class SearchMPG extends Component {
    //     state = {
    //         search: "",
    //         result: []
    //     }
    //     componentDidMount() {
    //         API.getEvent()
    //             .then(res => this.setState(
    //                 { result: res.data }))
    //             .catch(err => console.log(err))
    //         console.log(this.state.result)
    //     }
    //     handleInputChange = event => {
    //         this.setState({ search: event.target.value });
    //     };

    // searchCar = carId => {
    //     API.getMPG(carId)
    //         .then(res => this.setState({ result: res.data.message }))
    //         .catch(err => console.log(err));
    // };
    // searchCar = () => {
    //     API.getMPG
    //         .then(res => this.setState({ result: res.data }))
    //         .catch(err => console.log(err));
    // }
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchCar(this.state);
    // };
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
export default Event;