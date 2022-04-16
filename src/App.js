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
import AboutLynn from "./components/Lynn/AboutLynn";
// Personal Style
import "./App.css";
import Home from "./components/Home";
// Returner Components Import Section
import Colton from "./components/Colton/Colton";
import AboutHeidi from "./components/Heidi/AboutHeidi";
import AboutAnnie from "./components/Annie/AboutAnnie";
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
            <Navbar.Brand href="/MARS-Feb2022-CohortCollaboration">
              MARS - Feb. 2022 Cohort Group Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/MARS-Feb2022-CohortCollaboration">
                  Home
                </Nav.Link>
                <NavDropdown
                  title="February 2022 Returners"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/MARS-Feb2022-CohortCollaboration/Colton">
                    Colton W
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/MARS-Feb2022-CohortCollaboration/Lynn">
                    Lynn R
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">Another Returner</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/MARS-Feb2022-CohortCollaboration/Heidi">
                    Heidi W
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/MARS-Feb2022-CohortCollaboration/Annie">
                    Annie W
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">Another Returner</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">Another Returner</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">Another Returner</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          {/* To implement YOUR component, copy what I did here for the names of your own component */}
          {/* I named my component 'Colton', but feel free name it whatever you like! */}
          {/* DONT FORGET TO EDIT THE LINK ELEMENT NEAR YOUR CARD AS WELL */}
          <Route path="*" element={<Home />} />
          <Route
            path="/MARS-Feb2022-CohortCollaboration/home"
            element={<Home />}
          />
          <Route
            path="/MARS-Feb2022-CohortCollaboration/Colton"
            element={<Colton />}
          />
          <Route
            path="/MARS-Feb2022-CohortCollaboration/Lynn"
            element={<AboutLynn />}
          />
          {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
          <Route
            path="/MARS-Feb2022-CohortCollaboration/Heidi"
            element={<AboutHeidi />}
          />
          <Route 
            path='/MARS-Feb2022-CohortCollaboration/Annie' 
            element={<AboutAnnie />} 
          /> 
          {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
          {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
          {/* <Route path='/ReturnerName' element={<ReturnerComponent />} /> */}
        </Routes>
        {/* Maybe Add later */}
        {/* <Redirect /> */}
      </Router>
    </div>
  );
}

export default App;
