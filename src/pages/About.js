import React from 'react';
import "./About.css";
import { Container, Col, Row } from "../components/grid";

const About = () => (

    <Container>
        <Row>
            <Col size="xl-7">
                <div id="aboutTitle">
                    About Us
                </div>
                <div id="aboutBody">
                    <p>We are a small, family owned and operated farm located  in Stockton, California.</p>
                    <br />
                    <p>Our mission is to provide organically fruits and vegetables for everyone to enjoy.
                    We want to help people get back in touch with the food they eat and have a fun time
                    at the farm!</p>
                </div>
                <div >
                    <img id="vetOwned" src={require("../images/vetowned.png")} alt="vet" />
                </div>
            </Col>
            <Col size="xl-5">
                <div id="aboutPics">
                    <div>
                        <img id="aboutPic1" src="https://via.placeholder.com/400x250" alt="about1" />
                    </div>
                    <br />
                    <div>
                        <img id="aboutPic2" src="https://via.placeholder.com/400x250" alt="about2" />
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
);

export default About
