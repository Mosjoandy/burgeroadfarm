import React from 'react';
import "./Directions.css"
import { Container, Col, Row } from "../../components/grid"
import Fade from 'react-reveal/Fade';

const Directions = () => (

    <Container>
        <Row>
            <Col size="xl-7">
                <Fade left>
                    <div className="card">
                        <div id="directionsTitle">
                            Directions
                            </div>
                        <div id="directionsBody">
                            <ol type="1">
                                <li className="listDirect">From Sacramento, take CA-99 South to Stockton</li>
                                <li className="listDirect">Take the Waterloo Rd/HWY-88 exit</li>
                                <li className="listDirect">Head East towards Jackson</li>
                                <li className="listDirect">Turn right on to Fairchild Rd</li>
                                <li className="listDirect">Turn right on to Burge Rd</li>
                                <li className="listDirect">Go to the very end of Burge Rd</li>
                                <li className="listDirect">Pass the railroad tracks</li>
                                <li className="listDirect">Follow the road as it curves left</li>
                                <li className="listDirect">Keep going until you see the sign</li>
                                <li className="listDirect">Call us if you get lost :)</li>
                            </ol>
                            <div className="ml-3">
                                <a href="tel:+12098171650" target="_blank" rel="noopener noreferrer">
                                    <img id="contactIco" src={require("../../images/telephone.png")} alt="tele" />
                                    (209) 817-1650
                            </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Col>
            <Col size="xl-5">
                <Fade right>
                    <div id="directionsBody">
                        <div className="mapouter card">
                            <div className="gmap_canvas">
                                <iframe title="gmapBRF" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=burge%20road%20farm&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                                </iframe>
                            </div>
                        </div>
                        <div className="card-footer bg-white">
                            <a className="text-center " href="https://goo.gl/maps/FVcHZag9vZJ2" target="_blank" rel="noopener noreferrer">
                                <img id="contactIco" src={require("../../images/map.png")} alt="gmap" />
                                3000 Burge Rd, Stockton, CA 95215
                            </a>
                        </div>
                    </div>
                </Fade>
            </Col>
        </Row>
    </Container>
);

export default Directions
