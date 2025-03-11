import React from "react";
import "../css/projects.css";

const projects = [
  {
    title: "sunChaser",
    description:
      "User-friendly application designed to help individuals stay on top of the weather efficiently.",
    image: "/images/Jobs.gif",
    link: "https://github.com/HPOGFD/sunChaser.git",
    featured: true,
    techStack: ["React", "OpenWeather API", "CSS"],
  },
  {
    title: "teamDepo",
    description:
      "A command-line application for managing employee data, including departments, roles, and employees.",
    image: "/images/Jobs.gif",
    link: "https://github.com/HPOGFD/teamDepo.git",
    featured: false,
    techStack: ["Node.js", "Inquirer", "MySQL"],
  },
  {
    title: "whipBuilder",
    description:
      "A modular OOP project for building and customizing vehicles with components like color and wheels.",
    image: "/images/Jobs.gif",
    link: "https://github.com/HPOGFD/whipBuilder.git",
    featured: false,
    techStack: ["JavaScript", "OOP", "ES6 Classes"],
  },
  {
    title: "budgetApp",
    description:
      "Easy form to input salary and expenses with a user-friendly calculator.",
    image: "/images/Jobs.gif",
    link: "https://github.com/HPOGFD/BudgetApp.git",
    featured: false,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="projects-container">
      {/* Header */}
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Check out some of the projects I’ve built—showcasing my skills in development and problem-solving!</p>
      </div>

      {/* Featured Project */}
      {featuredProject && (
        <div className="project-card featured">
          <img src={featuredProject.image} alt={featuredProject.title} className="project-image" />
          <h3 className="project-title">{featuredProject.title} (⭐ Featured)</h3>
          <p className="project-description">{featuredProject.description}</p>
          <div className="project-tech-stack">
            {featuredProject.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
          <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="project-button">
            Learn More
          </a>
        </div>
      )}

      {/* Other Projects */}
      <div className="projects-grid">
        {otherProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
