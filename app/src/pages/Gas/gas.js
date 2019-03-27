import React from "react";
import Input from "../../components/Forms/input";
import Button from "../../components/button/button";

function Gas() {
    return (
        <div>
            <Input
            type ="text"
            name = "text"
            id= "topInput"
            placeholder = "Make"/>

            <Input
            type ="text"
            name = "text"
            id= "bottomInput"
            placeholder = "Model"/>

            <Input
            type ="number"
            name = "number"
            id= "furtherBottom"
            placeholder = "Year"/>

            <Button
            id= "main"
            text = "Submit"/>

        </div>

    )
}
export default Gas;