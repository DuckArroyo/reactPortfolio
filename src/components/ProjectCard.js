import React from "react";
import "./projects.css";

export default function ProjectCard(props) {
  console.log(props.image);
  return (
    <div className="card">
      <div className="img-container">
        {/* testing this option */}
        {/* ! modify the projects.json file */}
        <img alt={props.image} src={`./assets/photos/${props.image}`} />
        {/* Original line that worked before deploy to github */}
        <img alt={props.image} src={props.image} />

      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name: </strong> {props.name}
          </li>
          <li>
            <strong>GitHub: </strong>
            <a href={props.gitHub}>Link</a>
          </li>
          <li>
            <strong>Live Application: </strong>
            <a href={props.liveLink}>Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
