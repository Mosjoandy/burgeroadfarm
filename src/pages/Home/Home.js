import React from "react";
import "./Home.css";
import { Container, Col, Row } from "../../components/grid";
import Slide from "react-reveal/Slide";
import Bounce from 'react-reveal/Bounce';
import Fade from "react-reveal/Fade";

const Home = () => (

  <Container>
    <Row>
      <Col size="xl-12">
        <Fade>
          <div className="card">
            <Slide bottom>

              <div id="homeTitle">
                Cherry Season is Coming!
              </div>

            </Slide>
            <Slide bottom>

              <div id="homeBody">

                <p>Please stay tuned for season opening announcement!</p>
                <p>Follow us on</p>
                <p>
                  <span><a rel="noopener noreferrer" href="https://www.facebook.com/burgeroadfarm/" target="_blank">
                    <img id="homeIcon" src={require("../../images/facebook.png")} alt="facebook burge road farm" />
                  </a></span>
                  {} and {}
                  <span><a rel="noopener noreferrer" href="https://www.instagram.com/burgeroadfarm/" target="_blank">
                    <img id="homeIcon" src={require("../../images/instagram.png")} alt="instagram burge road farm" />
                  </a></span>
                </p>
              </div>

            </Slide>
            <Bounce>

              <div className="card">
                {/* <img className="mx-auto" id="cherry" src={require("../../images/cherry.png")} alt="cherryTriple" /> */}
                <img className="mx-auto" id="announcePic" src={require("../../images/announcementpic1.jpg")} alt="front page pic" />

              </div>

            </Bounce>
          </div>
        </Fade>
      </Col>
    </Row>
  </Container>
);

export default Home;
