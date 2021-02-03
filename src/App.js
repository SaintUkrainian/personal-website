import './App.css';

import Nav from "./components/nav/Nav";
import About from "./components/about/About";

function App() {
    return (
        <div className="App">
            <Nav/>
            <div className={"Main"}>
                <div className={"Welcome"}>
                    <h1>Hey, Welcome!</h1>
                </div>
                <About/>
            </div>
        </div>
    );
}

export default App;
