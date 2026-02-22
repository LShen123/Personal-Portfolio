import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Data Science",
      school: "New Jersey Institute of Technology",
      year: "2023-2027",
      gpa: "3.98/4.0"
    },
    {
      degree: "High School Diploma",
      school: "John P Stevens High School",
      year: "2019-2023",
      gpa: "3.4/4.0"
    }
  ];

  const experience = [
    {
      title: "Data Science Intern",
      company: "Johnson & Johnson",
      period: "January - July 2025",
      responsibilities: [
        "Analyzed global sales and shipping data using Python, SQL, and Databricks (Spark) to identify anomalies related to counterfeiting, diversion, and tampering supporting investigations across multiple regions",
        "Accelerated detection of irregular shipments by designing 50+ interactive Tableau and Matplotlib dashboards, centralized within a custom SharePoint analytics platform to streamline regional access to import/export insights",
        "Engineered an internal AutoML framework in Python to automate model selection and hyperparameter tuning, introducing multiclass classification and feature importance tracking to scale anomaly detection capabilities"
      ]
    },
    {
      title: "Research Fellow",
      company: "NJIT Summer Research Institute",
      period: "Summer 2024",
      responsibilities: [
        "Developed and simulated a self-assembly algorithm in MATLAB, analyzing swarm behavior across multiple configurations to evaluate formation stability and accuracy",
        "Built a computer simulation to generate and analyze experiment results, comparing various swarm behaviors",
        "Presented findings at the NJIT Undergraduate Summer Research Symposium"
      ]
    }
  ];

  const skills = {
    "Programming & Query Languages": ["Python", "MySQL", "Java", "C++", "R","Matlab", "HTML5", "CSS3"],
    "Data Analytics & Visualization": ["Tableau", "DataBricks", "Matplotlib", "Scikit-Learn", "Chart.js", "React", "Node.js"],
    "Tools & Technologies": ["Git", "VS Code", "Excel", "Jupyter Notebook", "Linux", "Docker"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;