import React from "react";
// import "./style.css";
import Nav from "../Nav/index"
import Jumbo from "../Jumbo/index"

function Contain() {
    return (
        <div className="container">
            <Jumbo />
            <Nav />
        </div>
    )
}
export default Contain;