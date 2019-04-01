import React from "react";
import { withState } from "recompose";

function NoMatch() {
    const h1Style = {
        color: "white"
      };
    
  return (


        <div>
            <h1 style={h1Style}>404 This Page was not Found</h1>
        </div>

    )
}
export default NoMatch;