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
            Electrical sales application engineer with 10+ years of expertise in industrial automation, transitioning into full-stack development. Specialized in designing and implementing technical solutions integrating hardware and software. Proven track record in technical sales, project management, and cross-functional collaboration to deliver impactful results.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Languages & Frameworks:</strong> HTML, CSS, JavaScript, TypeScript, React, Node.js</li>
            <li><strong>Development Tools:</strong> Git, APIs, SQL, NoSQL</li>
            <li><strong>Industrial Technology:</strong> Flow meters, controllers, sensor systems, industrial automation</li>
            <li><strong>Business Skills:</strong> Technical sales, project management, team leadership</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <ul>
            <li><strong>UConn Coding Boot Camp</strong> - Full Stack Development | Sep 2024 – Apr 2025 (Expected)</li>
            <li><strong>Manhattan College</strong> - Bachelor of Engineering, Electrical and Electronics Engineering | 2010 – 2013</li>
            <li><strong>SUNY Westchester Community College</strong> - Associate of Science, Electrical and Electronics Engineering | 2008 – 2010</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResumeComponent;
