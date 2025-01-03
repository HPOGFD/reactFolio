import React from 'react';
import '../style/projects.css';


export default function Projects() {
    console.log('About.jsx is running');
    return (
        <div id="projects">
        <div className="container">
          <div className="project-list"></div>
          <div className="project-list">
            <div className="project-item">
              <img src='../images/weather.gif' className='project-gif'/>
              <h2>sunChaser</h2>
              <p>User-friendly application designed to help individuals be on top of the weather efficiently.</p>
              <a href="https://github.com/HPOGFD/sunChaser.git">Learn More</a>
            </div>
            <div className="project-item">
            <img src='../images/weather.gif' className='project-gif'/>
              <h2>teamDepo</h2>
              <p>A command-line application for managing employee data. It allows you to view and manage departments, roles, and employees, including adding new records and updating employee roles.</p>
              <a href="https://github.com/HPOGFD/teamDepo.git">Learn More</a>
            </div>
            <div className="project-item">
            <img src='../images/whip.gif' className='project-gif'/>
              <h2>whipBuilder</h2>
              <p>A modular OOP project that allows users to build and customize vehicles by selecting components like color, wheels, towing capacity</p>
              <a href="https://github.com/HPOGFD/whipBuilder.git">Learn More</a>
            </div>
            <div className="project-item">
                <img src='../images/weather.gif' className='project-gif'/>
              <h2>budgetApp</h2>
              <p>Easy form to input salary and expenses with easy to use calculator</p>
              <a href="https://github.com/HPOGFD/BudgetApp.git">Learn More</a>
              
            </div>
          </div>
        </div>
      </div>
      
    );
}