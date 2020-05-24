import React from 'react';
import "./Media.css";
import { Container, Col, Row } from "../../components/grid";
import Fade from "react-reveal/Fade";
import Gallery from 'react-grid-gallery';
import IMAGES from '../../images/IMAGES';

class Media extends React.Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col size="xl-12">
                        <p id="homeBody">
                            Videos
                        </p>
                        <div className="card-deck text-center">

                            <div className="card">
                                <iframe
                                    title="visitStocktonInterview"
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/1Zl1DPrWVyE"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media">
                                </iframe>
                                <span className="space-top">
                                    May 24, 2017
                                </span>
                            </div>
                            <div className="card">
                                <iframe
                                    title="Sprouts Cherries"
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/uOVFZuj-wAk"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media">
                                </iframe>
                                <span className="space-top">
                                    July 14, 2014
                                </span>
                            </div>
                        </div>

                        <Fade top>
                            <p id="homeBody">
                                Photos
                        </p>
                            <Gallery
                                images={IMAGES}
                                enableImageSelection={false}
                                rowHeight={300}
                                margin={4}
                            />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Media