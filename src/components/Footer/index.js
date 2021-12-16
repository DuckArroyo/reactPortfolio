import React from "react";
import { ExternalLink } from "react-external-link";
function Footer() {
  return (
    <footer>
      <nav className="footer">
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">Back to top</a>
          </li>
          <li>
            <ExternalLink
              href="https://duckarroyo.github.io/challenge2/"
              target="_blank"
            >
              First Portfolio
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/DuckArroyo" target="_blank">
              GitHub
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://twitter.com/DevDuckArroyo"
              target="_blank"
            >
              Twitter
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://www.linkedin.com/in/duckarroyo/"
              target="_blank"
            >
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://codepen.io/DeveloperDuckArroyo)"
              target="_blank"
            >
              Codepen.io
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="mailto:DeveloperDuckArroyo@gmail.com">
              Email Me
            </ExternalLink>
          </li>
        </ul>
      </nav>
      <h2 className="inBox">DeveloperDuck</h2>
    </footer>
  );
}

export default Footer;
