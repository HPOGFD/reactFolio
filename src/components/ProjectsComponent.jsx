import React from "react";
import "../css/projects.css";

const projects = [
  {
    title: "JobSearch API",
    description:
      "🚀 A full-stack job search platform built with React, TypeScript, GraphQL, and MongoDB. Search, save, and track job applications with ease! 🔍💼",
    image: "/images/Jobs.gif",
    link: "https://github.com/HPOGFD/JobSearchAPI.git",
    featured: true,
    techStack: [
      "Frontend",
      "⚛️ React with TypeScript",
      "🔄 Apollo Client for GraphQL integration",
      "🎨 Bootstrap for responsive styling",
      "Backend",
      "🟢 Node.js",
      "🚂 Express.js",
      "📊 GraphQL API",
      "🍃 MongoDB with Mongoose ODM",
      "🔒 JWT Authentication"
    ],
  },
  {
    title: "BookSearch API",
    description:
      "Google Books GraphQL App 📚 A full-stack MERN application integrating Google Books API with GraphQL and MongoDB. Users can search, save, and manage books in their profiles with secure JWT authentication. 🚀",
    image: "/images/books.gif",
    link: "https://github.com/HPOGFD/teamDepo.git",
    featured: false,
    techStack: [
      "Frontend",
      "⚛️ React with TypeScript",
      "🔄 Apollo Client for GraphQL integration",
      "🎨 Bootstrap for responsive styling",
      "Backend",
      "🟢 Node.js",
      "🚂 Express.js",
      "📊 GraphQL API",
      "🍃 MongoDB with Mongoose ODM",
      "🔒 JWT Authentication"
    ],
  },
  {
    title: "Social Network API",
    description:
      "A social network API built using Express.js, MongoDB, Mongoose, and TypeScript. It provides features for users to create and interact with thoughts, reactions, and friend lists. The API supports CRUD operations for thoughts, reactions, and friends, allowing users to connect and share their thoughts in a social network-like environment.",
    image: "/images/network.gif",
    link: "https://github.com/HPOGFD/whipBuilder.git",
    featured: false,
    techStack: [ "Backend",
      "🟢 Node.js",
      "🚂 Express.js",
      "📊 GraphQL API",
      "🍃 MongoDB with Mongoose ODM",
      "🔒 JWT Authentication"],
  },
  {
    title: "Weather App API",
    description:
      "Get 5-day forecasts, track search history, and plan ahead with Node.js, Express, and TypeScript.",
    image: "/images/weather.gif",
    link: "https://github.com/HPOGFD/BudgetApp.git",
    featured: false,
    techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Express.js"],
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
          <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="project-button learn-more">
  Learn More
</a>
<br />
<a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="project-button live-demo">
  Live Demo
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
