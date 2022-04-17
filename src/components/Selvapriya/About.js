import React from 'react';
import SelvapriyaA from '../../images/SelvapriyaA.jpg'


function About(props) {
    return (
        <div style = {{backgroundColor: "#122240", padding: "30px"}}>
            <h1 style = {{fontSize: "20px", color: "#c0a98e"}}>Welcome to my Page</h1>
            <img src={SelvapriyaA} alt="picture of Selvapriya A "  
            width = "250" height = "250px"></img>
        <p style ={{ fontSize: "15px", color: "#c0a98e"}}>
       I am a Full-Stack Web Developer with experience in HTML5, CSS3, JavaScript, React JS.
       I am passionate about learning new programming languages. I enjoy working on collaborative teams.
      </p>
      <p style ={{ fontSize: "10px", color: "#c0a98e"}}>
          Copyright &copy; 2022
      </p>
       </div>      
    );
}
export default About;