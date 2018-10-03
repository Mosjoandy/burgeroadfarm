import React from 'react';
import "./Media.css";
import { Container, Col, Row } from "../components/grid";
import Fade from "react-reveal/Fade";
import Gallery from 'react-grid-gallery';

const IMAGES =

    [
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512345/BRF/2.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512345/BRF/2.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 180
            
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512334/BRF/16.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512334/BRF/16.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 240
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512364/BRF/13.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512364/BRF/13.jpg",
            thumbnailWidth: 432,
            thumbnailHeight: 545
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512361/BRF/9.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512361/BRF/9.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 180
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512361/BRF/6.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512361/BRF/6.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 320
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512353/BRF/18.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512353/BRF/18.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 320
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512352/BRF/8.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512352/BRF/8.jpg",
            thumbnailWidth: 256,
            thumbnailHeight: 192
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512346/BRF/3.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512346/BRF/3.jpg",
            thumbnailWidth: 280,
            thumbnailHeight: 576
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512345/BRF/4.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512345/BRF/4.jpg",
            thumbnailWidth: 280,
            thumbnailHeight: 576
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512366/BRF/12.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512366/BRF/12.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 320
        }
        
    ]


class Media extends React.Component {


    render() {

        return (
            <Container>
                <Row>
                    <Col size="xl-12">
                        <Fade>
                            <Gallery
                                images={IMAGES}
                                enableImageSelection={false}
                            />
                        </Fade>
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
