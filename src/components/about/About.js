import React from "react";

import MyPhoto from "../icons/MyPhoto";

import "./About.css"

const about = () => {
    return (
        <div className={"About"}>
            <MyPhoto/>
            <p>My name is Denys. I’m a <strong>Trainee Java Developer</strong>.
                Currently working in <strong>SoftServe</strong> company.
                <br/>
                <br/>
                My hobbies:
                <br/>
                - science
                <br/>
                - music
                <br/>
                - serials
                <br/>
                - sports</p>
        </div>
    );
};

export default about;