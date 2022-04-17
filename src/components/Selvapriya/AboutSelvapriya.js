import React from 'react';
import SelvapriyaA from '../../images/SelvapriyaA.jpg'
import './AboutSelvapriya.css';

function AboutSelvapriya(props) {
    return (
        <div>
            <h1>Welcome to my Page</h1>
            <img src={SelvapriyaA} alt="picture of Selvapriya A "  
            ></img>
        <p>
       I am a Full-Stack Web Developer with experience in HTML5, CSS3, JavaScript, React JS.
       I am passionate about learning new programming languages. I enjoy working on collaborative teams.
      </p>
      <p>
          Copyright &copy; 2022
      </p>
       </div>      
    );
}

export default AboutSelvapriya;