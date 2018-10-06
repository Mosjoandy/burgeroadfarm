import React from 'react';
import "./NoMatch.css";
import { Container, Col, Row } from "../components/grid";

const NoMatch = () => (

    <Container>
        <Row>
            <Col size="xl-12">
                <div id="NoMatchTitle">
                    Got lost in 404 acres of cherry tree farm!
                </div>
            </Col>
        </Row>
    </Container>
);

export default NoMatch
