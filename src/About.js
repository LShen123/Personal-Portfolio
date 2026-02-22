import { Component } from 'react';
import './About.css';
import profilePic from './profilePic.jpg';

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-container">
            <img src={profilePic} alt="Profile" className="profile-image" />
          </div>
          
          <div className="about-text-container">
            <p>
              Hello! I'm Luke Shen, an aspiring Data Scientist with a passion for uncovering insights from data and building impactful projects.
            </p>
            <p>
              I am currently a student at the New Jersey Institute of Technology, where I am pursuing a degree in Data Science with a minor in Artificial Intelligence. I have a strong foundation in programming languages while also having experience with various data analysis tools and machine learnign frameworks.  I am always eager to learn new skills and technologies. 
            </p>
            
            <h3 className="skills-title">Skills & Technologies</h3>
            <div className="skills-container">
              <span className="skill-badge">Data Analysis</span>
              <span className="skill-badge">Data Visualization</span>
              <span className="skill-badge">Machine Learning</span>
              <span className="skill-badge">LLMs</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;