import React from "react";

import "./NavIcon.css";
import CSSTransition from "react-transition-group/CSSTransition";

const navIcon = (props) => {
    return (
        <CSSTransition classNames={"slide"} timeout={300} in={props.open}>
            <div className={["NavIcon", props.open ? "open" : null].join(" ")} onClick={props.openNav}>
                <div className={["bar1", props.open ? "open" : null].join(" ")}/>
                <div className={["bar2", props.open ? "open" : null].join(" ")}/>
            </div>
        </CSSTransition>

    );
}

export default navIcon;