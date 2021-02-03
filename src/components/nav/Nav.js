import React, {useState} from "react";

import Socials from "../socials/Socials";
import NavIcon from "./nav-icon/NavIcon";

import "./Nav.css";

function Nav() {

    const [open, setOpen] = useState(false);

    const links = (
        <div className="Links">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Portfolio</h3>
        </div>
    );

    return (
        <div className={["Nav", open ? "open" : null].join(" ")}>
            <NavIcon openNav={() => setOpen(!open)} open={open}/>
            {open ? links : null}
            <Socials open={open}/>
        </div>
    );
}

export default Nav;