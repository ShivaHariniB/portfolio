import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical skills</h2>
      <p>
        Comprehensive expertise across modern development stack with focus on
        scalable web applications and DevOps practices.
      </p>
      <div className="skills-grid">
        <div className="skill-box">
          <h3>
            <i className="bi bi-code"></i> Programming Languages
          </h3>
          <div className="skill-buttons">
            <span className="skill-button">Javascript</span>
            <span className="skill-button">Typescript</span>
            <span className="skill-button">SQL</span>
            <span className="skill-button">Java</span>
            <span className="skill-button">Python</span>
          </div>
        </div>
        <div className="skill-box">
          <h3>
            <i className="bi bi-globe"></i> Web & Mobile Development
          </h3>
          <div className="skill-buttons">
            <span className="skill-button">React</span>
            <span className="skill-button">HTML/CSS</span>
            <span className="skill-button">Cordova</span>
            <span className="skill-button">Android(Kotlin)</span>
          </div>
        </div>
        <div className="skill-box">
          <h3>
            <i className="bi bi-gear"></i> Version Control and DevOps
          </h3>
          <div className="skill-buttons">
            <span className="skill-button">Git</span>
            <span className="skill-button">CI/CD with Jenkins</span>
          </div>
        </div>
        <div className="skill-box">
          <h3>Tools & IDEs</h3>
          <div className="skill-buttons">
            <span className="skill-button">IntelliJ</span>
            <span className="skill-button">VS Code</span>
            <span className="skill-button">Postman</span>
            <span className="skill-button">Android Studio</span>
          </div>
        </div>
        <div className="skill-box">
          <h3>
            <i className="bi bi-database"></i> Databases
          </h3>
          <div className="skill-buttons">
            <span className="skill-button">MySQL</span>
            <span className="skill-button">PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
