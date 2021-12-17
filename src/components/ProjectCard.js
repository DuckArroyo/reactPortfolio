import React from "react";
import "./projects.css";
//attemp to connect
import photos from "../assets/photos/";

export default function ProjectCard(props) {
  //! Need to connect the photos to the img below.
  // Cannot save in project.json
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.image}
          src={require(`./assets/photos/${props.image}`)}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>GitHub:</strong> 
            <a href={props.gitHub} target="_blank">Link</a>
          </li>
          <li>
            //!Need to convert to a short URL
            <strong>Live Application:</strong> 
            <span href="${props.liveLink}" target="_blank">Link</span>
            
          </li>
        </ul>
      </div>
    </div>
  );
}
