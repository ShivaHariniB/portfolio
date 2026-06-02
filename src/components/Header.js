import React, { useState, useCallback } from "react";
import "../styles/Header.css";
import { PORTFOLIO_DATA } from "../constants";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  // { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const HAMBURGER_BARS = 3;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      scrollToSection(sectionId);
    },
    [scrollToSection],
  );

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <h1>{PORTFOLIO_DATA.name}</h1>
        </div>
        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          {Array.from({ length: HAMBURGER_BARS }).map((_, i) => (
            <span key={i} className={`bar ${isOpen ? "bar-open" : ""}`} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
