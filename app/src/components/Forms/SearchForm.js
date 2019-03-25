import React, { Component } from "react";
import API from "../../utils/API";
import CarDetail from "../../pages/Gas/CarDetails";
import Search from "../../pages/Gas/gas";

class SearchMPG extends Component {
    state = {
        search: "",
        result: []
    }
    componentDidMount() {
        API.getEvent()
            .then(res => this.setState(
                { result: res.data }))
            .catch(err => console.log(err))
        console.log(this.state.result)
    }
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

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
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchCar(this.state);
    };
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
export default SearchMPG;