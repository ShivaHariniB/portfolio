import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            <span className="small-line">Hello, I'm</span>
            <span className="name-line">Shiva Harini Balakumaran</span>
          </h1>
          <p className="hero-subtitle">
            Software Developer | React Enthusiast | Full-Stack Engineer
          </p>
          <p className="hero-description">
            Passionate about building efficient, user-centric applications. With
            experience in React, mobile development, and DevOps, I specialize in
            creating seamless digital experiences for web and mobile platforms.
          </p>
          <div className="hero-buttons">
            <a href="/resume.pdf" className="btn btn-download" download>
              <i className="bi bi-download" aria-hidden="true" /> Download
              Resume
            </a>
            <a href="#projects" className="btn btn-primary-outline">
              View My Work
            </a>
          </div>
          <div className="hero-social">
            <a
              href="https://github.com/ShivaHariniB"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-github" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/shiva-harini-balakumaran-605ba2171/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="bi bi-linkedin" aria-hidden="true" />
            </a>
            <a href="mailto:youremail@example.com" className="social-icon">
              <i className="bi bi-envelope-fill" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/assets/images/profile.jpg"
            alt="Shiva Harini Balakumaran"
          />
          <div className="availability-tag">
            <span className="availability-dot"></span>
            Available for Work
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
