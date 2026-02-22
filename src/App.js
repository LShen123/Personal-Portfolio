import React, { Component } from 'react';
import './App.css';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentComponent: 'about' };
  }

  handleNavClick = (component) => {
    this.setState({ currentComponent: component });
  }
  render() {
    return (
      <div className="personal-profile-app">
        <div className="header-navigation">
          <div className="navigation-menu">
            <p onClick={() => this.handleNavClick('about')}>About Me</p>
            <p onClick={() => this.handleNavClick('portfolio')}>Portfolio</p>
            <p onClick={() => this.handleNavClick('resume')}>Resume</p>
            <p onClick={() => this.handleNavClick('contact')}>Contact</p>
          </div>
        </div>
        
        <div className="main-content-area">
          {
          this.state.currentComponent === 'resume' ? <Resume /> :
          this.state.currentComponent === 'contact' ? <Contact /> : 
          this.state.currentComponent === 'portfolio' ? <Portfolio /> :
           <About />}
           
        </div>
      </div>
    );
  }
}

export default App;
