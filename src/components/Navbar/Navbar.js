import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Col } from "./../grid/"
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <Container>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Col size="md-3">
                        <Link to="/">
                        <img id="burgeLogo" src={require("../../images/burge.png")} alt="brfLogo" />
                        </Link>
                    </Col>
                    <Col size="md-9">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <li><Link to="/" id="navButtons" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                    Home
                                    </Link>
                                </li>
                                <li><Link to="/Events" id="navButtons" className={window.location.pathname === "/events" ? "nav-link active" : "nav-link"}>
                                    Events
                                    </Link>
                                </li>
                                <li><Link to="/About" id="navButtons" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                    About
                                    </Link>
                                </li>
                                <li><Link to="/Contact" id="navButtons" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                    Contact
                                    </Link>
                                </li>
                                <li><Link to="/Directions" id="navButtons" className={window.location.pathname === "/directions" ? "nav-link active" : "nav-link"}>
                                    Directions
                                    </Link>
                                </li>
                                <li><Link to="/Media" id="navButtonsLast" className={window.location.pathname === "/media" ? "nav-link active" : "nav-link"}>
                                    Media
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </Col>
                </nav>
            </Container>
        );
    };
};

export default Navbar

