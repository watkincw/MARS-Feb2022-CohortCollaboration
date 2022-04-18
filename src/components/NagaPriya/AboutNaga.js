import React from 'react';
import img from '../../images/Naga_Priya_Img_2.png';

function AboutNaga(props) {
    return (
        <div>
            <h2>Meet Naga Priya</h2>
            
            <img src={img} width="20%"/>
            <div style={{padding:'2em',width:'80%', margin:'auto',textAlign:'justify', textJustify:'auto' }}>
            {/* <p > <emp>Hello!!</emp> Thank you for visiting my Page.</p> */}
            
            <p>I am a Computer Engineering Graduate, experienced in Software Development and Testing. I have worked on Life Critical Aircraft Software in accordance with DO-178 B standards.
            
            I am inquisitive and curious to learn, understand and implement new ideas. I love long walks, listening to music and playing board games with friends and family.
            
            </p>
            <p>Currently, I am a fullstack developer intern at Mars Solution Group. I have hands on Experience in developing webpages using HTML, CSS and Java Script, creating React components and managed application state using redux. </p>
            </div>
        </div>
    );
}

export default AboutNaga;