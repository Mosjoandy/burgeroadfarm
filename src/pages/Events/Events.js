import React from 'react';
import "./Events.css";
import { Container, Col, Row } from "../../components/grid";
import Slide from "react-reveal";

const Events = () => (

    <Container>
        <Row>
            <Col size="xl-12">

                {/* <div className="card"> */}
                <div id="eventCard">
                    <Slide bottom>

                        <div id="eventBody">
                            <p id="eventsTitle">
                                <span role="img" aria-label="cherry">🍒</span>
                                <b>U-Pick Cherries Opening on Memorial Weekend 2020!</b>
                                <span role="img" aria-label="cherry">🍒</span>
                            </p>
                            <p>
                                We know times are tough right now, so
                                we are keeping our price the same at $3.50 per pound with no entrance fee this season.
                                    </p>
                            <p>
                                No appointments needed, but social distancing will be required.
                                    </p>
                            <p>
                                Open 7 days a week from 8:00AM to 4:00PM until cherries are gone!
                                    </p>

                        </div>
                    </Slide>

                    {/* <div>
                            ALMOST THERE! Our Bing Cherries are a few sunny days away from being fully ripe! WE OPEN MEMORIAL DAY WEEKEND! 🍒🇺🇲🍒🇺🇲🍒 We know times are tough right now, so we are keeping our price the same at $3.50 per pound with no entrance fee this season. Also change of plans: NO APPOINTMENTS NEEDED, but social distancing will be required. See you soon! ❤
                        </div> */}
                </div>
                {/* </div> */}
            </Col>
        </Row>
    </Container>
);

export default Events
