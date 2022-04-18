import React from 'react';
import AnnieW from '../../images/AnnieW.jpg';
import { Col, Container, Row} from "react-bootstrap";


function AboutAnnie(props) {
    return (
        <div className="container">
            <h1>Welcome to my Page</h1>
            <img src={AnnieW} alt="picture of Annie" width = "50%"/>
            
        </div>
    );
}

export default AboutAnnie;