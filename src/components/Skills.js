import React from "react";
import "../styles/Skills.css";

const skillsData = [
  { label: "React", percent: 95 },
  { label: "JavaScript / TypeScript", percent: 93 },
  { label: "CSS / HTML", percent: 88 },
  { label: "MySQL", percent: 82 },
  { label: "Cordova", percent: 80 },
  { label: "Java", percent: 85 },
  { label: "IntelliJ", percent: 90 },
  { label: "VS Code", percent: 95 },
  { label: "Git", percent: 92 },
  { label: "Postman", percent: 80 },
  { label: "Android Studio", percent: 84 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <div className="skills-left">
          <h2>My creative skills & experiences.</h2>
          <p>
            I specialize in building production-grade applications with modern
            frontend and backend technologies. My strengths include React-driven
            UI development, clean JavaScript/TypeScript architecture, and strong
            tooling support for agile delivery across mobile and web platforms.
            I also have extensive experience with relational databases and
            cross-platform mobile frameworks.
          </p>
        </div>
        <div className="skills-right">
          {skillsData.map((skill) => (
            <div key={skill.label} className="skill-progress">
              <div className="skill-label">
                <span>{skill.label}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
