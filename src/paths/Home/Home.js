import React, {useState, useEffect} from "react";
import CSSTransition from "react-transition-group/cjs/CSSTransition";
import About from "../../components/about/About";

import "./Home.css";

function Home() {

    const [appear, setAppear] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAppear(true);
        }, 100)
    });

    return (
        <div className={"Main"}>
            <CSSTransition timeout={1000} classNames="welcome" in={appear} mountOnEnter>
                <div className={"Welcome"}>
                    <h1>Hey, Welcome!</h1>
                </div>
            </CSSTransition>
            <CSSTransition timeout={1500} classNames="about" in={appear} mountOnEnter>
                <About />
            </CSSTransition>
        </div>
    );
};

export default Home;