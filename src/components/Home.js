import React from "react";
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
import "../App.css";
import "../components/styles.css";

// temporary background photos
import mountains1 from "../images/mountains1.jpg";
import mountains2 from "../images/mountains2.jpg";
import mountains3 from "../images/mountains3.jpg";
import technology from "../images/technology.jpg";
import woman_at_desktop from "../images/woman_at_desktop.jpg";
import career_in_tech from "../images/career_in_tech.jpg";

import technology1 from "../images/technology1.jpg";
import Banner_Image from "../images/Banner_Image.jpg"
import Banner_Image1 from "../images/Banner_Image1.jpg";
import Banner_Image2 from "../images/Banner_Image2.jpg";


import ColtonW from "../images/ColtonW.jpg"
import LynnR from "../images//LynnR.jpg";
import RichardF from "../images/RichardF.jpg";
import HeidiW from "../images/HeidiW.jpg";
import AnnieW from "../images/AnnieW.jpg";
import SelvapriyaA from "../images/SelvapriyaA.jpg";

function Home(props) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={technology1} alt="FirstCarousel" />
          <Carousel.Caption>
            <h3 style={{ color: "white" }}>MARS RETURNSHIP</h3>
            <p style={{ color: "white" }}>
              The MARS Returnship program is an on-ramp for those looking to
              restart their careers in technology following a gap in employment.
              MARS provides on-the-job training, mentorship, and a partnership
              approach to prepare our cohorts to successfully rejoin the
              workforce. Meet the February 2022 Cohort!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner_Image}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Second slide label</h3>
            {/* {<p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>} */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner_Image1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner_Image2}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Fourth slide label</h3>
            {/* {<p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>} */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      

      <br />
      {/* Personal Cards - Row 1 */}
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            <Link to="/MARS-Feb2022-CohortCollaboration/Colton">
              <Card>
                <Card.Img
                  className="rounded-circle"
                  variant="top"
                  src={ColtonW}
                />
                <Card.Body>
                  <Card.Title>Colton</Card.Title>
                  <Card.Text>Short Description</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Card>
              <Card.Img className="rounded-circle" variant="top" src={LynnR} />
              <Card.Body>
                <Link to="/MARS-Feb2022-CohortCollaboration/Lynn">
                  <Card.Title>Lynn</Card.Title>
                </Link>
                <Card.Text>
                  Experience in medical imaging, telecom, STEM education and
                  project mangement
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* <Link to="/YourComponentName"> */}
            <Card>
              <Card.Img
                className="rounded-circle"
                variant="top"
                src={RichardF}
              />
              <Card.Body>
                <Card.Title>Richard</Card.Title>
                <Card.Text>
                  Long time programmer who loves science and math.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* </Link> */}
          </Col>
          <Col>
            {/* <Link to="/YourComponentName"> */}
            <Card>
              <Card.Img className="rounded-circle" variant="top" src={HeidiW} />
              <Card.Body>
                <Link to="/MARS-Feb2022-CohortCollaboration/Heidi">
                  <Card.Title>Heidi</Card.Title>
                </Link>
                <Card.Text>
                  Excited to transition to tech after a pandemic-ridden stint at
                  a think tank in Germany.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* </Link> */}
          </Col>
        </Row>
      </Container>

      <br />

      {/* Personal Cards - Row 2 */}
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
            <Card>
              <Card.Img className="rounded-circle" variant="top" src={AnnieW} />
              <Card.Body>
                <Link to="/MARS-Feb2022-CohortCollaboration/Annie">
                  <Card.Title>Annie</Card.Title>
                </Link>
                <Card.Text>
                  Worked as a Web Developer. Designed and Developed user friendly dynamic Webpages using PHP.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* <Link to="/YourComponentName"> */}
            <Card>
              <Card.Img
                className="rounded-circle"
                variant="top"
                src={SelvapriyaA}
              />
              <Card.Body>
              <Link to="/MARS-Feb2022-CohortCollaboration/Selvapriya">
             
                <Card.Title>Selvapriya</Card.Title>
                </Link>
                <Card.Text>Experience in full stack web development</Card.Text>
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
      </Container>
    </div>
  );
}

export default Home;
