import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container } from "./../grid/"
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <Container>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img id="burgeLogo" src={require("../../images/burge.png")} alt="brfLogo" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" id="navButtons" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                Home
                            </Link> 
                            <Link to="/Events" id="navButtons" className={window.location.pathname === "/events" ? "nav-link active" : "nav-link"}>
                                Events
                            </Link>
                            <Link to="/About" id="navButtons" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                About
                            </Link>
                            <Link to="/Contact" id="navButtons" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                Contact
                            </Link>
                            <Link to="/Directions" id="navButtons" className={window.location.pathname === "/directions" ? "nav-link active" : "nav-link"}>
                                Directions
                            </Link>
                            <Link to="/Media" id="navButtonsLast" className={window.location.pathname === "/media" ? "nav-link active" : "nav-link"}>
                                Media
                            </Link>
                        </div>
                    </div>
                </nav>
            </Container>
        );
    };
};

export default Navbar

