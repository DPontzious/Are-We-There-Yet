
// import { React, Component } from "react";



// class Trip extends Component(props) {

//     handleFormSubmit() {
//         // api bing zip search
//         // then update map
//     }
//     componentDidMount() {
//         var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
//         var location = new Microsoft.Maps.Location(35.0278, -111.0222);
//         var pushpin = new Microsoft.Maps.Pushpin(location, { color: 'green' });
//         var zipLocation;

//         //push the pin onto the map
//         map.entities.push(pushpin);

//         //the setView function is a bing maps function for setting the center of the map view
//         map.setView({
//             //changes the type of map
//             mapTypeId: Microsoft.Maps.MapTypeId.aerial,
//             //sets the center
//             center: new Microsoft.Maps.Location(35.027222, -111.0225),
//             //sets the zoom
//             zoom: 15
//         });

//     }

//     render() {
//         <div>
//             <div id="myMap"></div>
//             <form>
//                 {/* more code */}
//                 <button onClick={() => handleFormSubmit()}></button>
//             </form>
//             {/* everything else: form (zip), table, etc. */}
// import Gas from "../../components/Forms/Input"
// import { format } from "url";
// function Trip() {
//     return (
//         <div>
//             <Gas components={Gas} />
//             <h1>Hello, testing Trip</h1>
//         </div>
//     }
// };


//     )
// }

// export default Trip;