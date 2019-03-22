import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";


class Trip extends Component {

    handleFormSubmit = () => {
        // api bing zip search
        // then update map
    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <ReactBingmaps bingmapKey="AswFsvLf2w5DotjCEdVZ8m8KpOrZ41ADV4r43PDIMcknbmlhVUhPv2B8amujy5Gq"></ReactBingmaps>
                {/* <div id="myMap" style='position:relative;width:600px;height:400px;'></div> */}
                <form>

                </form>
                {/* everything else: form (zip), table, etc. */}
            </div >
        )
    }
};

export default Trip;