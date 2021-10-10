import React from 'react'
import '../App.css'
import { Col, Row, Container } from 'react-bootstrap'
import beautyhealth from './images/beautyhealth.jpg'
import { Carousel } from 'react-bootstrap'
import banner1 from './images/banner1.jpg'
import banner2 from './images/banner2.jpg'
import banner3 from './images/banner1.jpg'
import banner4 from './images/banner4.jpg'
import sub1 from './images/sub1.jpg'
import sub2 from './images/sub2.jpg'
import suplement1 from './images/suplement1.jpg'


function Index() {
    return (
        <div className="maincontent" style={{ height: '900px' }}>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img src={banner1} height="700px" width="100%" alt="backgroundimg" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={banner2} height="700px" width="100%" alt="backgroundimg" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={banner3} height="700px" width="100%" alt="backgroundimg" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={banner4} height="700px" width="100%" alt="backgroundimg" />
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container className="maintain">
                <Row className="rowcontent">
                    <Col className="col1">
                        <h4>NATURALLY BEAUTIFUL</h4>
                        <h1>beauty & health</h1>
                        <span>Since 1988, NOW® Solutions has been the answer for those seeking the best in natural and organic beauty products. Our outstanding selection of the best organic beauty products, home beauty solutions and at-home beauty treatments is the perfect complement to your natural lifestyle.</span>
                    </Col>
                    <Col style={{ backgroundImage: `url(${beautyhealth})`, backgroundSize: 'cover' }}>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="discount"><h1>20% Off Select Products
                        </h1>
                            <span className="shopnownow">
                                Shop Now
                            </span>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Container className="secondpager" style={{ marginBottom: '30px' }}>
                <Row>
                    <Col className="colsright2" style={{ backgroundImage: `url(${sub1})`, backgroundSize: 'cover' }}>

                    </Col>
                    <Col className="colsright2" style={{ backgroundImage: `url(${sub2})`, backgroundSize: 'cover' }}>

                    </Col>
                    <Col className="colsright2" style={{ backgroundImage: `url(${suplement1})`, backgroundSize: 'cover' }}>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Index
