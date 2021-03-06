import React from 'react';
import "./Contact.css";
import { Container, Col, Row } from "../../components/grid";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import firebase from "../../utils/firebase";

class Contact extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            name: "",
            submitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log("Name: " + this.state.name);
        console.log("Email: " + this.state.email);

        const mailer = firebase.database().ref("mailer");
        const info = {
            name: this.state.name,
            email: this.state.email
        };
        mailer.push(info);

        this.setState({ submitted: true });
        event.target.reset();
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <Slide left>
                            <div className="card">
                                <Fade left>
                                    <div id="contactTitle">
                                        Oscar Richard Grado
                                    </div>
                                </Fade>
                                <div id="contactBody">
                                    <Fade left delay={500}>
                                        <p>Owner/Operator</p>
                                    </Fade>
                                    <Fade left delay={700}>
                                        <div><a href="tel:+12098171650" target="_blank" rel="noopener noreferrer">
                                            <img id="contactIco" src={require("../../images/telephone.png")} alt="tele" />
                                            (209) 817-1650
                                        </a></div>
                                    </Fade>
                                    <Fade left delay={900}>
                                        <div><a href="mailto:burgeroadfarm@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <img id="contactIco" src={require("../../images/email.png")} alt="mail" />
                                            burgeroadfarm@gmail.com
                                        </a></div>
                                    </Fade>
                                    <Fade left delay={1100}>
                                        <div><a href="https://goo.gl/maps/FVcHZag9vZJ2" target="_blank" rel="noopener noreferrer">
                                            <img id="contactIco" src={require("../../images/map.png")} alt="gmap" />
                                            3000 Burge Rd, Stockton, CA 95215
                                        </a></div>
                                    </Fade>
                                </div>
                            </div>
                        </Slide>
                    </Col>
                    <Col size="md-6">
                        {!this.state.submitted ? (
                            <Slide right>
                                <div className="card">
                                    <Slide right>
                                        <div id="contactTitle">
                                            Contact
                                    </div>
                                        <div id="contactBody">
                                            <p>Sign up to be part of mailing list and be notified of upcoming events at
                                                the farm like cherry season opening.
                                        </p>
                                        </div>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label className="contactLabel">Name: </label>
                                                <input type="text" className="form-control mt-1 mb-3" name="name" onChange={this.handleChange} required />

                                                <label className="contactLabel">Email: </label>
                                                <input type="email" className="form-control mt-1 mb-3" name="email" onChange={this.handleChange} required />

                                            </div>
                                            <button
                                                type="submit"
                                                className="btn contactLabel submitBtn"
                                                value="Submit"
                                                data-toggle="modal"
                                                data-target="#confirmation"
                                            >Sign Up</button>
                                        </form>
                                    </Slide>
                                </div>
                            </Slide>

                        ) : (
                                <div className="modal-body">
                                    <Slide top>
                                        <img id="checkMark" src={require("../../images/check.png")} alt="check mark" />
                                    </Slide>
                                    <Slide bottom cascade>
                                        <p>Thanks for signing up,</p>
                                        <h3>{this.state.name}!</h3>
                                        <p>Email updates will be sent to:</p>
                                        <h3>{this.state.email}</h3>
                                    </Slide>
                                </div>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Contact
