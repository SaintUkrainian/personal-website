import React from "react";

import MyPhoto2 from "../../components/icons/MyPhoto2";
import "./About.css";

const aboutSection = () => {
    return (
        <div className={"AboutSection"}>
            <MyPhoto2 />
            <p>
                I want to tell you a short story about me. Hope you enjoy).
                I was born in Kremenchuk, Ukraine. Finished school and currently studying in <strong>Karazin University,
                in Kharkiv</strong>.
                    I'm a student of <strong>Computer Science faculty</strong>. I enjoy programming and sort of stuff.
                    So, in my freetime i'm trying to learn as much new information as possible.
                    I do that by either watching courses on Udemy or videos on Youtube.
                    But now, i'm looking for a job to release myself as a developer,
                    because i've got a passion to work in a team on real projects.
                    My <strong>Skills</strong> you can find on <strong>LinkedIn profile</strong> (look at the navigation bar ;)).
            </p>
        </div>
    );
};

export default aboutSection;