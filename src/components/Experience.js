import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      jobTitle: "Member of Technical Staff: Software Developer",
      company: "Zoho Corporation",
      period: "2023 – 2024",
      location: "Remote",
      description:
        "Led a team of 5 developers in building scalable web applications using React and Node.js. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
      skills: ["React", "Node.js", "CI/CD", "Team Leadership"],
    },
    {
      jobTitle: "Member of Technical Staff: App Developer",
      company: "Gofrugal Technologies",
      period: "2022 – 2023",
      location: "Hybrid",
      description:
        "Developed full-stack applications with Java and Spring Boot backend, and Angular frontend. Collaborated with cross-functional teams to deliver projects on time.",
      skills: ["Java", "Spring Boot", "Angular", "MySQL"],
    },
    {
      jobTitle: "Software Engineer: Web App Developer",
      company: "Star Systems Pvt. Ltd.",
      period: "2021 – 2022",
      location: "On-site",
      description:
        "Assisted in developing mobile applications using Cordova and JavaScript. Gained experience in version control and agile methodologies.",
      skills: ["Cordova", "JavaScript", "Git", "Agile"],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Professional Experience</h2>
      <p className="experience-subtitle">
        Over 3 years of experience building scalable web applications and
        leading development teams in fast-paced environments.
      </p>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-box">
            <div className="experience-header">
              <div className="experience-left">
                <h3><i className="bi bi-suitcase-lg"></i> {exp.jobTitle}</h3>
                <p className="company">{exp.company}</p>
              </div>
              <div className="experience-right">
                <p className="period"><i className="bi bi-calendar"></i> {exp.period}</p>
                <p className="location"><i className="bi bi-geo-alt"></i> {exp.location}</p>
              </div>
            </div>
            <p className="description">{exp.description}</p>
            <div className="experience-skills">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="skill-button">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
