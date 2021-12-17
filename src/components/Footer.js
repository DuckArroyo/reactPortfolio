import React from "react";
import { ExternalLink } from "react-external-link";
function Footer() {
  return (
    <footer className="footer">
      {/* <a href="#about">Back to top</a> */}

      <ExternalLink
        href="https://duckarroyo.github.io/challenge2/"
        target="_blank"
      >
        First Portfolio
      </ExternalLink>

      <ExternalLink href="https://github.com/DuckArroyo" target="_blank">
        GitHub
      </ExternalLink>

      <ExternalLink href="https://twitter.com/DevDuckArroyo" target="_blank">
        Twitter
      </ExternalLink>

      <ExternalLink
        href="https://www.linkedin.com/in/duckarroyo/"
        target="_blank"
      >
        LinkedIn
      </ExternalLink>

      <ExternalLink
        href="https://codepen.io/DeveloperDuckArroyo)"
        target="_blank"
      >
        Codepen.io
      </ExternalLink>

      <ExternalLink href="mailto:DeveloperDuckArroyo@gmail.com">
        Email Me
      </ExternalLink>
    </footer>
  );
}

export default Footer;
