import { Component } from 'react';
import './Portfolio.css';
import cogImg from './cog.jpg';
import bulb from './Lightbulb.png';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          title: "GraphRAG AI Tutor",
          description: "An intelligent tutoring system utilizing GraphRAG to provide personalized learning experiences and dynamically retrieve knowledge.",
          technologies: ["Python", "LangChain", "Ollama"],
          imageURL: bulb,
          codeURL:"https://github.com/LShen123/Erica-AI-Tutor",
          demoURL:""
        },
        {
          id: 2,
          title: "Lexicogs Hackathon Project",
          description: "A React-based web application that makes players track and filter words in a continuously moving dataset.",
          technologies: ["React", "JavaScript", "CSS"],
          imageURL: cogImg,
          codeURL:"https://github.com/parkab/lexicogs",
          demoURL:"https://lexicogs.vercel.app/"
        }
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <h2 className="portfolio-title">My Portfolio</h2>
        
        <div className="projects-container">
          {
            // Using map function to dynamically render project cards
            this.state.projects.map((project) => (
              <div className="project-card" key={project.id}>

                <div className="project-image-container">
                  {/* Replaced placeholder with an actual image tag */}
                  <img src={project.imageURL} alt={project.title} className="project-img" />
                </div>

                <div className="project-content">
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span className="tech-badge" key={index}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    {/* Conditional rendering for Live Demo */}
                    {project.demoURL && (
                      <a href={project.demoURL} target="_blank" rel="noreferrer" className="btn btn-primary">
                        Live Demo
                      </a>
                    )}

                    {/* Code button (Assumes every project has code) */}
                    {project.codeURL && (
                      <a href={project.codeURL} target="_blank" rel="noreferrer" className="btn btn-secondary">
                        View Code
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Portfolio;