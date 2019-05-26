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
        
        setTimeout( console.log("poops"), 10000);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        {!this.state.submitted ? (
                            <Slide bottom>
                                <div className="card">
                                    <Slide bottom>
                                        <div className="text-center" id="contactTitle">
                                            Contact
                                    </div>
                                        <div className="text-center" id="contactBody">
                                            <p>
                                                Get updates and event information!
                                            </p>
                                        </div>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label className="contactLabel"></label>
                                                <input 
                                                type="text" 
                                                placeholder="Enter Your Name Here" 
                                                className="form-control mt-1 mb-3 input-text
                                                "
                                                name="name" 
                                                onChange={this.handleChange} 
                                                required />

                                                <label className="contactLabel"></label>
                                                <input 
                                                type="email" 
                                                placeholder="Enter Your Email Here" 
                                                className="form-control mt-1 mb-3 input-text
                                                "
                                                name="email" 
                                                onChange={this.handleChange} 
                                                required />

                                            </div>
                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    className="btn contactLabel submitBtn"
                                                    value="Submit"
                                                    data-toggle="modal"
                                                    data-target="#confirmation"
                                                >Sign Up
                                            </button>
                                            </div>
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
