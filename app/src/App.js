import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Trip from "./pages/Trip/Trip";
import NoMatch from "./pages/NoMatch/Nomatch";
import Nav from "./components/Nav/index"
import Events from "./pages/Events/index"
import Jumbo from "./components/Jumbo/index"
import Register from "./pages/Register/Register"
import SignExpanded from "./components/Login/SignExpanded"
import Save from "./components/Login/SignExpanded"
import SavedTrips from "./pages/SavedTrips/SavedTrips"




function App() {
    return (
        <Router>
            <Jumbo />
            <Nav />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/event" component={Events} />
                <Route exact path="/trip" component={Trip} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/savedTrips" component={SavedTrips} />
                <Route exact path="/" component={SignExpanded} />
                <Route component={NoMatch} />
            </Switch>
        </Router >
    );
}

export default App;