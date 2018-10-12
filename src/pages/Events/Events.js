import React from 'react';
import "./Events.css";
import { Container, Col, Row } from "../../components/grid";
import Fade from "react-reveal";

const Events = () => (

    <Container>
        <Row>
            <Col size="xl-12">
                <div id="eventsTitle">
                    <Fade cascade bottom duration={1200}>
                        <p>(COMING SOON)</p>
                    </Fade>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Events
