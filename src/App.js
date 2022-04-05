// Bootstrap
import {
    Card,
    Carousel,
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Row,
} from "react-bootstrap";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// Personal Style
import "./App.css";
// Returner Components Import Section
import Colton from "./components/Colton/Colton";
// temporary background photos
import mountains1 from "./images/mountains1.jpg";
import mountains2 from "./images/mountains2.jpg";
import mountains3 from "./images/mountains3.jpg";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            MARS - Feb. 2022 Cohort Group Portfolio
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">
                                        Another Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">
                                        A Third Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        After Divider
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    {/* To implement YOUR component, copy what I did here for the names of your own component */}
                    {/* I named my component 'Colton', but feel free name it whatever you like! */}
                    {/* DONT FORGET TO EDIT THE LINK ELEMENT NEAR YOUR CARD AS WELL */}

                    <Route path="/Colton" element={<Colton />} />
                    {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
                    {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
                    {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
                    {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
                    {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
                    {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
                    {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
                </Routes>
                {/* Maybe Add later */}
                {/* <Redirect /> */}

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={mountains1}
                            alt="FirstCarousel"
                        />
                        <Carousel.Caption>
                            <h3 style={{ color: "black" }}>
                                First slide label
                            </h3>
                            <p style={{ color: "black" }}>
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
                            <h3 style={{ color: "black" }}>
                                Second slide label
                            </h3>
                            <p style={{ color: "black" }}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
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
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* Personal Cards - Row 1 */}
                <Row xs={1} md={2} lg={4} className="g-4">
                    <Col>
                        <Link to="/Colton">
                            <Card>
                                <Card.Img
                                    className="rounded-circle"
                                    variant="top"
                                    src={mountains1}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Short Description</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        {/* <Link to="/YourComponentName"> */}
                            <Card>
                                <Card.Img
                                    className="rounded-circle"
                                    variant="top"
                                    src={mountains1}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Short Description</Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Link> */}
                    </Col>
                    <Col>
                        {/* <Link to="/YourComponentName"> */}
                            <Card>
                                <Card.Img
                                    className="rounded-circle"
                                    variant="top"
                                    src={mountains1}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Short Description</Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Link> */}
                    </Col>
                    <Col>
                        {/* <Link to="/YourComponentName"> */}
                            <Card>
                                <Card.Img
                                    className="rounded-circle"
                                    variant="top"
                                    src={mountains1}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Short Description</Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Link> */}
                    </Col>
                </Row>

                {/* Personal Cards - Row 2 */}
                <Row xs={1} md={2} lg={4} className="g-4">
                    <Col>
                        {/* <Link to="/YourComponentName"> */}
                            <Card>
                                <Card.Img
                                    className="rounded-circle"
                                    variant="top"
                                    src={mountains1}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Short Description</Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Link> */}
                    </Col>
                    <Col>
                        {/* <Link to="/YourComponentName"> */}
                            <Card>
                                <Card.Img
                                    className="rounded-circle"
                                    variant="top"
                                    src={mountains1}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Short Description</Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Link> */}
                    </Col>
                    <Col>
                        {/* <Link to="/YourComponentName"> */}
                            <Card>
                                <Card.Img
                                    className="rounded-circle"
                                    variant="top"
                                    src={mountains1}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Short Description</Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Link> */}
                    </Col>
                    <Col>
                        {/* <Link to="/YourComponentName"> */}
                            <Card>
                                <Card.Img
                                    className="rounded-circle"
                                    variant="top"
                                    src={mountains1}
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>Short Description</Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Link> */}
                    </Col>
                </Row>
            </Router>
        </div>
    );
}

export default App;
