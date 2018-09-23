import React from 'react';
import "./Contact.css";
import { Container, Col, Row } from "../components/grid";

class Contact extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            name: "",
            // comments: "",
            // mailer: "false"
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
        // console.log("Comment: " + this.state.comments);
        // console.log("Mailer: " + this.state.mailer);
        event.target.reset();
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <div id="contactTitle">
                            Oscar Richard Grado
                        </div>
                        <div id="contactBody">
                            <p>Owner/Operator</p>
                            <div><a href="tel:+12098171650" target="_blank" rel="noopener noreferrer">
                                <img id="contactIco" src={require("../images/telephone.png")} alt="tele" />
                                (209) 817-1650
                            </a></div>
                            <div><a href="mailto:burgeroadfarm@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img id="contactIco" src={require("../images/email.png")} alt="mail" />
                                burgeroadfarm@gmail.com
                            </a></div>
                            <div><a href="https://goo.gl/maps/FVcHZag9vZJ2" target="_blank" rel="noopener noreferrer">
                                <img id="contactIco" src={require("../images/map.png")} alt="gmap" />
                                3000 Burge Rd, Stockton, CA 95215
                            </a></div>
                        </div>
                    </Col>
                    <Col size="md-6">
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

                                {/* <label className="contactLabel">Comments: </label> 
                                <textarea type="text" className="form-control mt-1 mb-3" rows="3" name="comments" onChange={this.handleChange} />


                                <label className="form-check-label contactLabel">Recieve Email Updates:</label>
                                <input type="checkbox" className="ml-1 mt-3" name="mailer" />*/}
                            </div>
                            <button type="submit" className="btn contactLabel submitBtn" value="Submit">Sign Up</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Contact
