import React from "react";
import icon from "../../assets/images/gmail.png";

import "./Icon.css";

const gmail = () => {
    return <img src={icon} alt={"gmail-icon"} className={"Icon Gmail"}
                onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    location.href = "mailto:idanchik47@gmail.com";
                }
                }/>
}

export default gmail;