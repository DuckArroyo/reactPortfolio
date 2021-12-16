import React from "react";

function Nav() {

    const categories = [
        { name: "front end", description: "HTML, CSS, JavaScript projects" },
        { name: "back end", description: "APIs, SQL, Mongo" },
      ];

      function categorySelected(name) {
        console.log(`${name} clicked`)
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
              <span onClick={() => categorySelected(category.name)} >{category.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
