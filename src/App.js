import React from "react";

import "./App.css";
import Nav from "./components/nav/Nav";
import {Route, Switch} from "react-router";
import Home from "./paths/Home/Home";
import {TransitionGroup} from "react-transition-group";
import CSSTransition from "react-transition-group/CSSTransition";

function App() {

    return (
        <div className="App">
            <Nav/>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={700}
                                   classNames={"paths"} mountOnEnter unMountOnExit>
                        <Switch location={location}>
                            <Route path={"/about"} component={Home}/>
                            <Route exact path={"/"} component={Home}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>
        </div>
    );
}

export default App;
