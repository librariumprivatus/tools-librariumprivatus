import React from 'react';
import Biblioteka from "./Biblioteka";
import FetcJson from "./fetcJson";
import Apples from "./Apples";
import logo from "../logo.svg";

function Main() {
    return(
        <div className="main">
            <footer>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </footer>
        </div>
    );
}

export default Main;
