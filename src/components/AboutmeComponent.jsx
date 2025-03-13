import React from 'react';
import '../css/aboutme.css';

const AboutmeComponent = () => {
  return (
    <div className="about-container">
      {/* Added the overlay div that was missing */}
      <div className="about-overlay"></div>
      
      <div className="about-content">
    
        <p>
  Hi there! My name is <strong>Harry Oyarvide</strong>, a sales application engineer with a passion for back-end development and AWS cloud computing. 
  My background in electrical engineering, combined with growing skills in JavaScript, Node, SQL, NoSQL, PostgreSQL, React, and MongoDB, and APIs, fuels my love for problem-solving. 
  I have hands-on experience with MERN development and API fetching, which allows me to build dynamic, data-driven applications. 
  Outside of tech, I enjoy hiking with my family and our dog, Xena, and I am a huge F1 enthusiast 🏎️. 
  I am on a mission to merge my engineering mindset with cutting-edge tech to create impactful solutions. 
  Let us collaborate and build something amazing! 🚀
</p>

      </div>
    </div>
  );
};

export default AboutmeComponent;