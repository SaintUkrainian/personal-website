import React from "react";
import About from "../../components/about/About";

import "./Home.css";

function Home() {

    return (
        <div className={"Main"}>
            <div className={"Welcome"}>
                <h1>Hey, Welcome!</h1>
            </div>
            <About/>
        </div>
    );
};

export default Home;