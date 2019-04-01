import React from "react";
import { withState } from "recompose";

function NoMatch() {
    let styles = {
        color: "white"
    }

    return (
        <div>
            <h1 style={styles}>404 This Page was not Found</h1>
        </div>

    )
}
export default NoMatch;