import React from "react";
import "../style/Resume.css"; // Ensure you style it

const Resume = () => {
    return (
      <div className="resume-container">
        <h1 className="resume-header">Resume</h1>
  
        {/* Professional Summary */}
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Electrical sales application engineer with 10+ years of expertise in industrial automation, transitioning into full-stack development. Specialized in designing and implementing technical solutions integrating hardware and software. Proven track record in technical sales, project management, and cross-functional collaboration to deliver impactful results.
          </p>
        </section>
  
        {/* Technical Skills */}
        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Languages & Frameworks:</strong> HTML, CSS, JavaScript, TypeScript, React, Node.js</li>
            <li><strong>Development Tools:</strong> Git, APIs, SQL, NoSQL</li>
            <li><strong>Industrial Technology:</strong> Flow meters, controllers, sensor systems, industrial automation</li>
            <li><strong>Business Skills:</strong> Technical sales, project management, team leadership</li>
          </ul>
        </section>
  
        {/* Professional Experience */}
        <section className="resume-section">
          <h2>Professional Experience</h2>
  
          <div className="experience-item">
            <h3>Sales Application Engineer II</h3>
            <p><i>OMEGA Engineering (Remote) | May 2014 – Aug 2024</i></p>
            <ul>
              <li>Led technical implementations of flow meters and sensor systems for industrial automation projects.</li>
              <li>Exceeded annual sales targets through multi-million-dollar deal closures and strategic client management.</li>
              <li>Partnered with product managers for new product development and platform integrations.</li>
              <li>Delivered technical leadership to cross-functional teams, enhancing product knowledge and sales strategies.</li>
              <li>Optimized customer self-service features by improving platform capabilities.</li>
            </ul>
          </div>
  
          <div className="experience-item">
            <h3>Summer Manager</h3>
            <p><i>J.B. Moving Company | 2008 – 2012</i></p>
            <ul>
              <li>Directed operations and logistics for professional moving services, ensuring timely and quality service delivery.</li>
              <li>Mentored teams, optimizing task allocation to enhance efficiency.</li>
              <li>Managed customer relationships, maintaining high service satisfaction.</li>
            </ul>
          </div>
        </section>
  
        {/* Education */}
        <section className="resume-section">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>UConn Coding Boot Camp</strong>
              <p><i>Full Stack Development | Sep 2024 – Apr 2025 (Expected)</i></p>
              <p>Training in full-stack technologies: HTML, CSS, JavaScript, React, Node.js, SQL, NoSQL, APIs.</p>
            </li>
            <li>
              <strong>Manhattan College</strong>
              <p><i>Bachelor of Engineering, Electrical and Electronics Engineering | 2010 – 2013</i></p>
              <p>IEEE Member, led Solar Panel Design Research project.</p>
            </li>
            <li>
              <strong>SUNY Westchester Community College</strong>
              <p><i>Associate of Science, Electrical and Electronics Engineering | 2008 – 2010</i></p>
            </li>
          </ul>
        </section>
  
        {/* Certifications */}
        <section className="resume-section">
          <h2>Certifications</h2>
          <ul>
            <li>Full Stack Development Certificate (Expected Apr 2025)</li>
            <li>Dion Leadership Seminar Certificate (Sep 2024)</li>
          </ul>
        </section>
  
        {/* Key Projects */}
        <section className="resume-section">
          <h2>Key Projects</h2>
          <ul>
            <li><strong>Weather Forecast App:</strong> Backend system using Node.js and OpenWeatherMap API with city search and historical search functionality.</li>
            <li><strong>Job Application Tracker:</strong> Full-stack app leveraging React, Node.js, and MVC paradigm for user-friendly job application management.</li>
            <li><strong>BudgetApp:</strong> Financial management tool featuring an interactive calculator and customizable budget tracking.</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Resume;
