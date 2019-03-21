import React, { Component } from "react";
import API from "../utils/API";

class SearchMPG extends Component {
    state = {
        search: "",
        mpg: []
    }
    componentDidMount() {
        API.getMPG()
            .then(res => this.setState({
                mpg:
                    res.data
            }))
            .catch(err => console.log(err))
    }
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };
    render() {
        return (
            )
    }

}