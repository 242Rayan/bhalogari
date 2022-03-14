import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
    return ( <
        >
        <
        Navbar / >
        <
        section className = "hero-section" >
        <
        p > This is < /p> <
        h1 > Home Page < /h1> < /
        section > <
        />
    );
};

const About = () => {
    return ( <
        >
        <
        Navbar / >
        <
        section className = "hero-section" >
        <
        p > This is < /p> <
        h1 > About uS Page < /h1> < /
        section > <
        />
    );
};

const Contact = () => {
    return ( <
        >
        <
        Navbar / >
        <
        section className = "hero-section" >
        <
        p >This is < /p> <
        h1 > Contact Us Page < /h1> < /
        section > <
        />
    );
};

const Upload = () => {
    return ( <
        >
        <
        Navbar / >
        <
        section className = "hero-section" >
        <
        p > This is < /p> <
        h1 > upload cars page < /h1> < /
        section > <
        />
    );
};

const App = () => {
    return ( <
        Switch >
        <
        Route exact path = "/" >
        <
        Home / >
        <
        /Route>

        <
        Route path = "/about" >
        <
        About / >
        <
        /Route>

        <
        Route path = "/contact" >
        <
        Contact / >
        <
        /Route>

        <
        Route path = "/upload" >
        <
        Upload / >
        <
        /Route>  < /
        Switch >
    );
};

export default App;