import React, { Component } from "react";
import FilledText from "../../components/Forms/InputForMileage"
import SearchMPG from "../../components/Forms/SearchForm"
import axios from "axios"

class Events extends Component {
    state = {
        search: '',
        result: []
    }
    handleFormSunb
    componentDidMount() {
        axios.get("http://api.eventful.com/json/events/search?&app_key=xrgnP4GQZxFmGt2n&keywords=books&location=San+Diego&date=Future")
            .then(res => this.setState(
                { results: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div> {this.state.result}
            </div >

        )
    }
    //     <div>
    //         <FilledText />
    //         <SearchMPG />
    //         <h1>Hello, testing Gas</h1>
    //     </div>

    // )
}
export default Events;