import React from "react";
import "./Home.css";
import { Container, Col, Row } from "../components/grid";

const Home = () => (

  <Container>
    <Row>
      <Col size="xl-12">
        <div id="homeTitle">
          WE ARE CLOSED FOR THE 2018 SEASON
        </div>
        <div id="homeBody">
        <p>our cherries are sold out!</p>
        <p>We want to thank EVERYONE for coming out and supporting our little farm!</p>  
        </div>
        <div>
          <img id="cherry" src={require("../images/cherry.png")} alt="cherryTriple" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Home;
