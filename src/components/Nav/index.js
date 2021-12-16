import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const categories = [
    { name: "About Me", description: "About me in a component" },
    { name: "portfolio", description: "My works description" },
    { name: "Contact", description: "Contact component" },
    { name: "Resume", description: "Qualifications list" },
    { name: "5 Year Plan", description: "The next 5 years" },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header>
      <h2 className="inBox">DeveloperDuck</h2>
      <nav className="navBar">
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li>
            <span>5 years</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
