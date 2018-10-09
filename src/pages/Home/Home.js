import React from "react";
import "./Home.css";
import { Container, Col, Row } from "../../components/grid";
import Slide from "react-reveal/Slide";
import Bounce from 'react-reveal/Bounce';

const Home = () => (

  <Container>
    <Row>
      <Col size="xl-12">
        <Slide bottom>
          <div id="homeTitle">
            WE ARE CLOSED FOR THE 2018 SEASON
        </div>
        </Slide>
        <Slide bottom>
          <div id="homeBody">
            <p>our cherries are sold out!</p>
            <p>We want to thank EVERYONE for coming out and supporting our little farm!</p>
          </div>
        </Slide>
        <Bounce>
          <div>
            <img id="cherry" src={require("../../images/cherry.png")} alt="cherryTriple" />
          </div>
        </Bounce>
      </Col>
    </Row>
  </Container>
);

export default Home;
