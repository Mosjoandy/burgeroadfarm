import React from 'react';
import "./Media.css";
import { Container, Col, Row } from "../components/grid";
import Fade from "react-reveal/Fade";
import Gallery from 'react-grid-gallery';
import IMAGES from './IMAGES';

class Media extends React.Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col size="xl-12">
                        <Fade top>
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
