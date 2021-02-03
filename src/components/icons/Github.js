import React from "react";
import icon from "../../assets/images/github.png";

import "./Icon.css";

const github = () => {
    return <img src={icon} alt={"github-icon"} className={"Icon Github"}
                onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    location.href = "https://github.com/SaintUkrainian";
                }}/>
}

export default github;