import React, {useState} from "react";

import Socials from "../socials/Socials";
import NavIcon from "./nav-icon/NavIcon";

import "./Nav.css";

function Nav() {

    const [open, setOpen] = useState(false);

    return (
        <div className={["Nav", open ? "open" : null].join(" ")}>
            <NavIcon openNav={() => setOpen(!open)} open={open}/>
            <Socials open={open}/>
        </div>
    );
}

export default Nav;