import React from "react";

import "./App.css";
import Nav from "./components/nav/Nav";
import {Route, Switch} from "react-router";
import Home from "./paths/Home/Home";
import {TransitionGroup} from "react-transition-group";
import CSSTransition from "react-transition-group/CSSTransition";
import About from "./paths/AboutSection/About";
import Portfolio from "./paths/Portfolio/Portfolio";
import {Redirect} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <Nav/>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={700}
                                   classNames={"paths"} mountOnEnter
                                   unmountOnExit>
                        <Switch location={location}>
                            <Route exact path={"/about"} component={About}/>
                            <Route exact path={"/portfolio"} component={Portfolio}/>
                            <Route exact path={"/home"} component={Home}/>
                            <Redirect from={"/*"} to={"/home"} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>
        </div>
    );
}

export default App;
