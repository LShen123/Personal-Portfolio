import { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "",
          title: "E-commerce Website",
          description: "A full-stack e-commerce platform built with React and Node.js",
          technologies: ["React", "Node.js", "MongoDB", "CSS3"],
        },
        {
          project_image: "",
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
      {
      //Use this section to list your projects dynamically from state using the map function
      }
      </div>
    );
  }
}

export default Portfolio;