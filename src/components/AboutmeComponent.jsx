import React from 'react';
import '../css/aboutme.css';

const AboutmeComponent = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img
          src="/images/IMG_2973.JPG"
          alt="Harry Oyarvide"
          className="profile-image"
        />
      </div>
      <div className="about-content">
        <h3 className="about-title">About Me</h3>
        <p>
          Hi there! 👋 My name is <strong>Harry Oyarvide</strong>, a sales application engineer with a passion for back-end development and AWS cloud computing. 
          My background in electrical engineering, combined with growing skills in JavaScript, Node, SQL, and React, fuels my love for problem-solving. 
          Outside of tech, I enjoy hiking with my family and our dog, Xena, and I’m a huge F1 enthusiast 🏎️. 
          I’m on a mission to merge my engineering mindset with cutting-edge tech to create impactful solutions. 
          Let’s collaborate and build something amazing! 🚀
        </p>
      </div>
    </div>
  );
};

export default AboutmeComponent;
