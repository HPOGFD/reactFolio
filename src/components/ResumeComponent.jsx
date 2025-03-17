import React from 'react';
import "../css/resume.css";

const ResumeComponent = () => {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <div className="resume-header">
          <h1>Resume</h1>
          <a
            className="resume-button"
            href="https://drive.google.com/file/d/1vmtDIfVg8C-GZWOFfc2OUtevlbHAQQnR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Full Stack Software Developer transitioning from industrial automation, skilled at creating customized technical solutions that address business needs. 
            Experienced in collaborating with team members to deliver efficient workflows and ensure seamless product integration. 
            Adept at combining technical expertise with customer-facing support, with hands-on experience in MERN development and API fetching. 
            Passionate about using engineering problem-solving skills to build impactful, dynamic, and data-driven applications.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Programming Languages:</strong> JavaScript, TypeScript, HTML, CSS, Python</li>
            <li><strong>Web Development Frameworks:</strong> React, Node.js, Express.js</li>
            <li><strong>Enterprise Software Knowledge:</strong> Salesforce, APIs</li>
            <li><strong>Databases:</strong> MySQL, PostgreSQL, NoSQL</li>
            <li><strong>Tools & Technologies:</strong> Git, VS, Postman, Insomnia</li>
            <li><strong>Languages:</strong> English, Spanish</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>JobSearch API</strong> | <a href="https://github.com/GFDHPO/JobSearchAPI" target="_blank" rel="noopener noreferrer">GitHub</a><br />
              A full-stack job search platform built with React, TypeScript, GraphQL, and MongoDB. Search, save, and track job applications with ease.  
              <ul>
                <li><strong>Frontend:</strong> React with TypeScript, Apollo Client, Bootstrap</li>
                <li><strong>Backend:</strong> Node.js, Express.js, GraphQL API, MongoDB, JWT Authentication</li>
              </ul>
            </li>
            <li>
              <strong>BookSearch API</strong> | <a href="https://github.com/GFDHPO/BookSearchAPI" target="_blank" rel="noopener noreferrer">GitHub</a><br />
              A full-stack MERN application integrating Google Books API with GraphQL and MongoDB. Users can search, save, and manage books in their profiles with secure JWT authentication.  
              <ul>
                <li><strong>Frontend:</strong> React with TypeScript, Apollo Client, Bootstrap</li>
                <li><strong>Backend:</strong> Node.js, Express.js, GraphQL API, MongoDB, JWT Authentication</li>
              </ul>
            </li>
            <li>
              <strong>Social Network API</strong> | <a href="https://github.com/GFDHPO/SocialNetworkAPI" target="_blank" rel="noopener noreferrer">GitHub</a><br />
              A social network API built using Express.js, MongoDB, Mongoose, and TypeScript. Supports CRUD operations for thoughts, reactions, and friend lists.  
              <ul>
                <li><strong>Backend:</strong> Node.js, Express.js, GraphQL API, MongoDB, JWT Authentication</li>
              </ul>
            </li>
            <li>
              <strong>Weather App API</strong> | <a href="https://github.com/GFDHPO/WeatherAppAPI" target="_blank" rel="noopener noreferrer">GitHub</a><br />
              Get 5-day forecasts, track search history, and plan ahead with Node.js, Express, and TypeScript.  
              <ul>
                <li><strong>Tech Stack:</strong> HTML, CSS, JavaScript, TypeScript, Node.js, Express.js</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          <ul>
            <li><strong>Sales Application Engineer II</strong> | 2014 - Present<br />
              DwyerOmega Engineering | Norwalk, CT  
              <ul>
                <li>Acted as the primary technical expert during client interactions, providing tailored demonstrations and troubleshooting support for industrial automation products.</li>
                <li>Worked directly with end users to identify business challenges and propose customized solutions utilizing sensor systems and flow meters.</li>
                <li>Provided technical support to internal sales teams to improve their understanding of product functionality and integration.</li>
                <li>Quickly adapted to new technologies and processes, expanding knowledge to effectively address evolving client needs.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <ul>
            <li><strong>Full Stack Web Development Boot Camp Certificate</strong> | University of Connecticut, Stamford, CT  
              An intensive program focused on developing technical programming skills in HTML5, CSS3, JavaScript, React, Node.js, MongoDB, MySQL, APIs, Python, and more.
            </li>
            <li><strong>Bachelor of Science in Electrical Engineering</strong> | Manhattan College, Riverdale, NY</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResumeComponent;
