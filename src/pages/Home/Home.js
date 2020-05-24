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
                <p>
                  <span role="img" aria-label="cherry">🍒</span><b>WE ARE SOLD OUT AND ARE NOW CLOSED FOR THE 2020 SEASON</b><span role="img" aria-label="cherry">🍒</span>
                </p>
                <p>
                  We want to thank everyone who came to our farm and made this season our best one yet! 
                </p>
                <p>
                  You guys are awesome!
                </p>
              </div>
            </Slide>
            <Slide bottom>
              {/* <div id="homeTitle">
                <p>
                  Open Everyday 8AM - 4PM
                </p>
                <p>
                  We will stay open until cherries sell out
                </p>
                <br />
                <p>
                  <u>COVID-19 Update:</u>
                </p>
                <p>
                  No appointments necessary, but social distancing will be required!
                    </p>
              </div>
              <br /> */}
              <div id="homeTitle2">
                Please follow us on  <span><a rel="noopener noreferrer" href="https://www.facebook.com/burgeroadfarm/" target="_blank">
                  <img id="homeIcon" src={require("../../images/facebook.png")} alt="facebook burge road farm" />
                </a></span>
                {} {}
                <span><a rel="noopener noreferrer" href="https://www.instagram.com/burgeroadfarm/" target="_blank">
                  <img id="homeIcon" src={require("../../images/instagram.png")} alt="instagram burge road farm" />
                </a></span> for the next season's updates.
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
  </Container >
);

export default Home;
