import React from 'react';
import "./Media.css";
import { Container, Col, Row } from "../components/grid";

const Media = () => (

    <Container>
        <Row>
            <Col size="xl-12">
                <div className="mediaBody">
                    <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel" data-slide-to="1"></li>
                            <li data-target="#carousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="item d-block w-100" src="https://via.placeholder.com/800x300" alt="First slide" />
                                <div class="carousel-caption">
                                    <h4>Heading 1</h4>
                                    <p>Details....</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="item d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
                                <div class="carousel-caption">
                                    <h4>Heading 2</h4>
                                    <p>Details....</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="item d-block w-100" src="https://via.placeholder.com/700x300" alt="Third slide" />
                                <div class="carousel-caption">
                                    <h4>Heading 3</h4>
                                    <p>Details....</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Media
