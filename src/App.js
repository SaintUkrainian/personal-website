import React from "react";

import "./App.css";
import Nav from "./components/nav/Nav";
import {Route, Switch} from "react-router";
import Home from "./paths/Home/Home";

function App() {

    return (
        <div className="App">
            <Nav/>
            <Switch>
                <Route path={"/about"}><h1>Hey</h1></Route>
                <Route exact path={"/"} component={Home}/>
            </Switch>

        </div>
    );
}

export default App;
