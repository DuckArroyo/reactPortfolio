import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }),
    [currentCategory];

  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <header className="flex-row px-1">
      <h2 className="inBox">DeveloperDuck</h2>
      <nav>
        <ul className="navBar">
          <li>
            <a href="#about">About Me</a>
          </li>
          {categories.map((category) => (
            <li
              className={`${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
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
