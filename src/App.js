// Bootstrap
import { Card, Carousel, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
// Personal Style
import "./App.css";
// temporary background photos
import mountains1 from './images/mountains1.jpg';
import mountains2 from './images/mountains2.jpg';
import mountains3 from './images/mountains3.jpg';

function App() {
    return (
        <div className="App">

            <Navbar bg='light' expand='lg'>
                <Container>
                    <Navbar.Brand href='#home'>MARS - Feb. 2022 Cohort Group Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">A Third Action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">After Divider</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={mountains1} alt="FirstCarousel" />
                    <Carousel.Caption>
                        <h3 style={{color: 'black'}}>First slide label</h3>
                        <p style={{color: 'black'}}>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mountains2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: 'black'}}>Second slide label</h3>
                        <p style={{color: 'black'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mountains3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Personal Cards */}
            <Row xs={1} md={2} lg={4} className='g-4'>
                <Col>
                    <Card>
                        <Card.Img className="rounded-circle" variant="top" src={mountains1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Short Description
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="rounded-circle" variant="top" src={mountains1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Short Description
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="rounded-circle" variant="top" src={mountains1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Short Description
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="rounded-circle" variant="top" src={mountains1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Short Description
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={4} className='g-4'>
                <Col>
                    <Card>
                        <Card.Img className="rounded-circle" variant="top" src={mountains1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Short Description
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="rounded-circle" variant="top" src={mountains1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Short Description
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="rounded-circle" variant="top" src={mountains1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Short Description
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="rounded-circle" variant="top" src={mountains1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Short Description
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default App;
