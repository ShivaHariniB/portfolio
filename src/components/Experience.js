import React from "react";
import "../styles/Experience.css";

const EXPERIENCES = [
  {
    id: "zoho",
    jobTitle: "Member of Technical Staff: Software Developer",
    company: "Zoho Corporation",
    period: "2023 – 2024",
    location: "On-site",
    description: [
      "Developed and maintained features for Zoho's Inventory Management mobile application using React and Java/Kotlin, while supporting onboarding activities through customer issue resolution and feature enhancements.",
      "Managed operations and maintenance for the EarnSmart application, providing end-to-end development support to ensure platform stability, performance, and continuous improvements.",
    ],
    skills: [
      "React",
      "Mobile Application Development",
      "Application Support & Enhancement",
    ],
  },
  {
    id: "gofrugal",
    jobTitle: "Member of Technical Staff: App Developer",
    company: "Gofrugal Technologies",
    period: "2022 – 2023",
    location: "Hybrid",
    description: [
      "Led the end-to-end development and ownership of EarnSmart, a cross-platform React/Cordova sales application for Android and iOS, enabling sales reps to manage orders, returns, schedules, and daily transactions efficiently.",
      "Collaborated with customers and product owners to resolve production issues and enhance features, while also managing deployments through Jenkins and publishing regular application updates to the Google Play Store.",
    ],
    skills: [
      "Cross-Platform Application Development",
      "React",
      "Cordova",
      "CI/CD & Deployment",
    ],
  },
  {
    id: "star",
    jobTitle: "Software Engineer: Web App Developer",
    company: "Star Systems Pvt. Ltd.",
    period: "2021 – 2022",
    location: "On-site",
    description: [
      "Contributed to modernizing and optimizing an online estate sales platform using React.js by enhancing seller and admin portal functionalities and improving the application’s mobile responsiveness across smaller breakpoints.",
      "Independently handled end-to-end development tasks for seller and admin modules, while resolving bugs and support tickets to improve platform stability and overall performance.",
    ],
    skills: ["Frontend Development", "React.js", "Responsive Web Design"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Professional Experience</h2>
      <p className="experience-subtitle">
        Over 3 years of experience building scalable web applications and
        leading development teams in fast-paced environments.
      </p>
      <div className="experience-container">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="experience-box">
            <div className="experience-header">
              <div className="experience-left">
                <h3>
                  <i className="bi bi-suitcase-lg"></i> {exp.jobTitle}
                </h3>
                <h3 className="company">{exp.company}</h3>
              </div>
              <div className="experience-right">
                <p className="period">
                  <i className="bi bi-calendar"></i> {exp.period}
                </p>
                <p className="location">
                  <i className="bi bi-geo-alt"></i> {exp.location}
                </p>
              </div>
            </div>
            {Array.isArray(exp.description) ? (
              <ul className="description-list">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="description">{exp.description}</p>
            )}
            <div className="experience-skills">
              {exp.skills.map((skill) => (
                <span key={skill} className="skill-button">
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
