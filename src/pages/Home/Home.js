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

                <span role="img" aria-label="cherry">🍒</span><b>Cherry Season Opens Memorial Day Weekend</b><span role="img" aria-label="cherry">🍒</span>

              </div>
            </Slide>
            <Slide bottom>

              <div id="homeBody">

                {/* <div id="homeTitle2">Open 8AM - 4PM</div> */}
                {/* <p>We will stay open until cherries sell out</p> */}

                <br />
                <div id="homeTitle3">
                  <u>COVID-19 Update:</u>
                  <div id="homeTitle3">
                    No appointments necessary, but social distancing will be required!
                </div>
                  <br />
                  <div id="homeTitle2">
                    Please follow us on  <span><a rel="noopener noreferrer" href="https://www.facebook.com/burgeroadfarm/" target="_blank">
                      <img id="homeIcon" src={require("../../images/facebook.png")} alt="facebook burge road farm" />
                    </a></span>
                    {} {}
                    <span><a rel="noopener noreferrer" href="https://www.instagram.com/burgeroadfarm/" target="_blank">
                      <img id="homeIcon" src={require("../../images/instagram.png")} alt="instagram burge road farm" />
                    </a></span> for the latest updates.
                  </div>
                </div>
                {/* <p>Please follow us on  {}

                  <span><a rel="noopener noreferrer" href="https://www.facebook.com/burgeroadfarm/" target="_blank">
                    <img id="homeIcon" src={require("../../images/facebook.png")} alt="facebook burge road farm" />
                  </a></span>
                  {} and {}
                  <span><a rel="noopener noreferrer" href="https://www.instagram.com/burgeroadfarm/" target="_blank">
                    <img id="homeIcon" src={require("../../images/instagram.png")} alt="instagram burge road farm" />
                  </a></span>

                  {}    for future events!
                  
                  </p> */}
              </div>

            </Slide>
            <Slide bottom>

              <div className="card">
                <img className="mx-auto" id="announcePic" src={require("../../images/opening_2020.jpg")} alt="cherryNow" />

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
