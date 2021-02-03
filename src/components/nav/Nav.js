import React, {useState} from "react";

import Socials from "../socials/Socials";
import NavIcon from "./nav-icon/NavIcon";

import "./Nav.css";
import {NavLink} from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";

function Nav() {

    const [open, setOpen] = useState(false);

    const links = (
        <CSSTransition timeout={300} classNames={"appear"} in={open} mountOnEnter unmountOnExit>
            <div className="Links">
                <NavLink exact to={"/"} activeClassName={"selected"} className={"Link"}>Home</NavLink>
                <NavLink to={"/about"} activeClassName={"selected"} className={"Link"}>About</NavLink>
                <NavLink to={"/portfolio"} activeClassName={"selected"} className={"Link"}>Portfolio</NavLink>
            </div>
        </CSSTransition>

    );

    return (
        <div className={["Nav", open ? "open" : null].join(" ")}>
            <NavIcon openNav={() => setOpen(!open)} open={open}/>
            {links}
            <Socials open={open}/>
        </div>
    );
}

export default Nav;