import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu on mobile after click
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <h1>Shiva Harini Balakumaran</h1>
        </div>
        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "bar-open" : ""}`}></span>
          <span className={`bar ${isOpen ? "bar-open" : ""}`}></span>
          <span className={`bar ${isOpen ? "bar-open" : ""}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
