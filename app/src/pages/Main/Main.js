import React from "react";
import "./style.css"
import Input from "../../components/Forms/input";
import Button from "../../components/button/button";


function Main() {   
    return (
        
       <main>
           <div className="container">
           <h3>Enter the city you are traveling to below</h3>
            <Input 
            type ="text"
            name = "text"
            id = "topInput"
            placeholder = "starting point"/>

            <Input
            type ="text"
            name = "text" 
            id = "bottomInput"
            placeholder = "destination"/>

            <Button
            id = "main"
            text = "Submit"/>
           </div>
       </main>
    )
}
export default Main;