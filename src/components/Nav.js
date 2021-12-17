import React from "react";

export default function Nav() {

  return (
    <header className="flex-row px-1">
      <h2 className="inBox">DeveloperDuck</h2>
      <nav>
        <ul className="navBar">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#fiveYearPlan">5 Year Plan</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
