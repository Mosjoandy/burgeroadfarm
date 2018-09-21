import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container } from "./../grid/"
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <Container>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/" ? "nav-link active" : "nav-link"
                                }>
                                Home</Link>
                            <Link
                                to="/Contact"
                                className={
                                    window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
                                }>
                                Contact</Link>
                        </div>
                    </div>
                </nav>
            </Container>
        );
    };
};

export default Navbar

