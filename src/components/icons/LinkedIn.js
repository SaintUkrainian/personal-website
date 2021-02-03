import React from "react";
import icon from "../../assets/images/linkedin.png";

import "./Icon.css";

const linkedin = () => {
    return <img src={icon} alt={"linkedin-icon"} className={"Icon LinkedIn"}
                onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    location.href = "https://www.linkedin.com/in/denys-matsenko-349994163/";
                }}/>
}

export default linkedin;