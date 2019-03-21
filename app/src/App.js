import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main.js/Main";
import Trip from "./pages/Trip/Trip";
import NoMatch from "./pages/NoMatch/Nomatch";
import Nav from "./components/Nav";
import ButtonAppBar from "./components/Nav/index";
import Gas from "./pages/Gas/gas";

function App() {
    return (
        <Router>
            <div>
                <Nav component={ButtonAppBar} />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/gas" component={Gas} />
                    <Route exact path="/trip" component={Trip} />
                    {/* <Route component={NoMatch} /> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;