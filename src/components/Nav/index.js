import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

  const categories = [
    { name: "portfolio", description: "My works description" },
    { name: "contact", description: "Contact component" },
    { name: "resume", description: "Qualifications list" },
    { name: "5 Year Plan", description: "The next 5 years" },
  ];

  const [currentCategory, setCurrentCategory] = useState(categories[0]);



  // function categorySelected(name) {
  //   console.log(`${name} clicked`);
  // }

  return (
    <header className="flex-row px-1">
      <h2 className="inBox">DeveloperDuck</h2>
      <nav className="navBar">
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          {categories.map((category) => (
            <li className={`mx-1 ${
              currentCategory.name === category.name && 'navActive'
              }`} key={category.name}>
              <span onClick={() => {setCurrentCategory(category)}}>
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
