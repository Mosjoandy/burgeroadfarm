import React from 'react';
import "./Media.css";
import { Container, Col, Row } from "../components/grid";
import Fade from "react-reveal/Fade";
// import Lightbox from "react-images";

class Media extends React.Component {
    constructor() {
        super()
        this.state = {
     
        };

    
    }     

    render() {
      
        return (
            <Container>
                <Row>
                    <Col size="xl-12">
                      
                        {/* <div className="card-columns ">
                            <Fade cascade timeout={2000}>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/400x600" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/500x500" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/250x500" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/400x600" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/700x500" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/300x600" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/400x600" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/500x500" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/250x500" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/400x600" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/700x500" alt="about1" />
                                    </div>
                                </div>
                                <div className="card border-0" >
                                    <div className="card-body">
                                        <img id="card-pic" className="rounded" src="https://via.placeholder.com/300x600" alt="about1" />
                                    </div>
                                </div>
                            </Fade>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Media
