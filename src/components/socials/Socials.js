import React from "react";

import GithubIcon from "../icons/Github";
import LinkedInIcon from "../icons/LinkedIn";
import GmailIcon from "../icons/Gmail";

import "./Socials.css";

const socials = (props) => {
    return (
        <div className={["Socials", props.open ? "open" : null].join(" ")}>
            <GithubIcon />
            <LinkedInIcon />
            <GmailIcon />
        </div>
    );
}

export default socials;
