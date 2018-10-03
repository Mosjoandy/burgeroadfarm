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
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512361/BRF/11.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512361/BRF/11.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 320
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512360/BRF/5.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512360/BRF/5.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 504
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512360/BRF/10.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512360/BRF/10.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 320
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512358/BRF/19.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512358/BRF/19.jpg",
            thumbnailWidth: 256,
            thumbnailHeight: 192
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512340/BRF/1.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512340/BRF/1.jpg",
            thumbnailWidth: 216,
            thumbnailHeight: 384
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512334/BRF/15.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512334/BRF/15.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 320
        },
        {
            src: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512349/BRF/17.jpg",
            thumbnail: "https://res.cloudinary.com/mosjoandy/image/upload/v1538512349/BRF/17.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 320
        }

    ]

class Media extends React.Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col size="xl-12">
                        <Fade top>
                            <Gallery
                                images={IMAGES}
                                enableImageSelection={false}
                                rowHeight={250}
                                margin={4}
                            />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Media
