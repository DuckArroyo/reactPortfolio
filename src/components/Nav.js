import React from "react";

export default function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected,
    resumeSelected,
    setResumeSelected,
    fiveSelected,
    setFiveSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2 className="inBox">DeveloperDuck</h2>
      <nav>
        <ul className="navBar">
          <li>
            <a href="#about" onClick={() => setContactSelected(false)}>
              About Me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className={`mx-2 ${portfolioSelected && "navActive"}`}>
            <a onClick={() => setPortfolioSelected(true)}>Portfolio</a>
          </li>
          <li className={`mx-2 ${resumeSelected && "navActive"}`}>
            <a onClick={() => setResumeSelected(true)}>Resume</a>
          </li>
          <li className={`mx-2 ${fiveSelected && "navActive"}`}>
            <a onClick={() => setFiveSelected(true)}>5 Year Plan</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
