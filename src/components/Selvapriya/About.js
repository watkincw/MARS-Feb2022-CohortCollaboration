import React from 'react';
import SelvapriyaA from '../../images/SelvapriyaA.jpg'
import 'AboutSelvapriya.css'

function About(props) {
    return (
        <div className = "text-center">
            <h1 className = "heading">Welcome to my Page</h1>
            <img src={SelvapriyaA} alt="picture of Selvapriya A "></img>
        <p className = "para-one">
       I am a Full-Stack Web Developer with experience in HTML5, CSS3, JavaScript, React JS.
       I am passionate about learning new programming languages. I enjoy working on collaborative teams.
      </p>
      <p className = "para-two">
          Copyright &copy; 2022
      </p>
    </div>      
    );
}
export default About;