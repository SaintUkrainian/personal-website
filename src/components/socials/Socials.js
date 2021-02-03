import React from "react";

import GithubIcon from "../icons/Github";
import LinkedInIcon from "../icons/LinkedIn";
import GmailIcon from "../icons/Gmail";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Socials.css";

const socials = (props) => {
    
    return (
        <CSSTransition in={props.open} timeout={300} classNames={"icons"}>
            <div className={"Socials"}>
                <GithubIcon />
                <LinkedInIcon />
                <GmailIcon />
            </div>
        </CSSTransition>
    );
};

export default socials;
