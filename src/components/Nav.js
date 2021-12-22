import React from "react";

export default function Nav() {
  return (
    <header>
      <h2 className="inBox">DeveloperDuck</h2>
      <nav>
        <ul className="navBar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/fiveyear">5 Year Plan</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
