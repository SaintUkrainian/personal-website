import React, {useState} from "react";

import CrudAppPhoto from "../../assets/images/web-data-base.png"
import FilmsFinderPhoto from "../../assets/images/films-finder-react.png"
import QuizAppPhoto from "../../assets/images/quiz-app.png"
import CalculatorPhoto from "../../assets/images/calculator.png";
import RockPaperPhoto from "../../assets/images/rock-paper-scissors.png";

import "./Portfolio.css";


function Portfolio() {

    const [selectedApp, setSelectedApp] = useState({
        id: 1,
        imageSrc: CrudAppPhoto,
        link: "https://github.com/SaintUkrainian/SimpleCrudProject",
        name: "SimpleCrudProject",
    });

    const [apps, setApps] = useState([
        {
            id: 1,
            imageSrc: CrudAppPhoto,
            link: "https://github.com/SaintUkrainian/SimpleCrudProject",
            name: "SimpleCrudProject",
        },
        {
            id: 2,
            imageSrc: QuizAppPhoto,
            link: "https://github.com/SaintUkrainian/QuizWebApp",
            name: "QuizWebApp",
        },
        {
            id: 3,
            imageSrc: FilmsFinderPhoto,
            link: "https://github.com/SaintUkrainian/filmsfinder-react",
            name: "FilmsFinder-React",
        },
        {
            id: 4,
            imageSrc: RockPaperPhoto,
            link: "https://github.com/SaintUkrainian/rock-paper-scissors-project",
            name: "Rock, Paper, Scissors",
        },
        {
            id: 5,
            imageSrc: CalculatorPhoto,
            link: "https://github.com/SaintUkrainian/calculator-js-demo",
            name: "Calculator",
        },
        {
            id: 6,
            imageSrc: "https://res.cloudinary.com/practicaldev/image/fetch/s--i_sb3chq--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/fk0849hvg2rt13bpqhjy.jpg",
            link: "https://github.com/SaintUkrainian/",
            name: "Check more on GitHub!",
        },
    ]);

    const nextProjectHandler = () => {
        if (selectedApp.id < apps[apps.length - 1].id) {
            setSelectedApp(apps.find(app => app.id === selectedApp.id + 1));
        }
        if (selectedApp.id === apps[apps.length - 1].id) {
            setSelectedApp(apps.find(app => app.id === apps[0].id));
        }
    };

    const previousProjectHandler = () => {
        if (selectedApp.id - 1 > 0) {
            setSelectedApp(apps.find(app => app.id === selectedApp.id - 1));
        }
        if (selectedApp.id === 1) {
            setSelectedApp(apps.find(app => app.id === apps[apps.length - 1].id));
        }
    };


    return (
        <div className={"Portfolio"}>
            <div className={"slider"}>
                <a href={selectedApp.link}
                   className={"app-link"}>{selectedApp.id === apps[apps.length - 1].id ? selectedApp.name : "Check the " + selectedApp.name + " out!"}</a>
                <img src={selectedApp.imageSrc} alt={""}/>
            </div>
            <div className={"Buttons"}>
                <button onClick={previousProjectHandler}
                        className={"Button"}>Previous
                </button>
                <button onClick={nextProjectHandler} className={"Button"}>Next
                </button>
            </div>
            <h1 className={"tip"}>Rotate the phone for better experience!</h1>
        </div>
    );
};

export default Portfolio;