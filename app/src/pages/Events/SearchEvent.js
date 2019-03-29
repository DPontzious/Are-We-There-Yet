import React from "react";
import "./style.css";

function SearchEvent(props) {
    return (
        <div className="text-center">
            {props.title}
            {props.description}
            {props.address}
        </div >
    );
}

export default SearchEvent;