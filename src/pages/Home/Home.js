import React from "react";
import "./Home.css";
import { Container, Col, Row } from "../../components/grid";
import Slide from "react-reveal/Slide";
// import Bounce from 'react-reveal/Bounce';
import Fade from "react-reveal/Fade";

const Home = () => (

  <Container>
    <Row>
      <Col size="xl-12">
        <Fade>
          <div className="card">
            <Slide bottom>

              <div id="homeTitle">
                Cherry Season is almost here!
              </div>

            </Slide>
            <Slide bottom>

              <div id="homeBody">

                <p>We will be open on June 1, 2019.</p>
                <p>Follow us for updates on</p>
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
            <Slide bottom>

              <div className="card">
                <img className="mx-auto" id="announcePic" src={require("../../images/cherriesNow.jpg")} alt="cherryNow" />

                {/* <img className="mx-auto" id="cherry" src={require("../../images/cherry.png")} alt="cherryTriple" /> */}

                {/* <img className="mx-auto" id="announcePic" src={require("../../images/progression1.jpg")} alt="front page pic1" />
                <br />
                <img className="mx-auto" id="announcePic" src={require("../../images/progression2.jpg")} alt="front page pic2" />
                <br />
                <img className="mx-auto" id="announcePic" src={require("../../images/progression3.jpg")} alt="front page pic3" /> */}
              </div>

            </Slide>
          </div>
        </Fade>
      </Col>
    </Row>
  </Container>
);

export default Home;
