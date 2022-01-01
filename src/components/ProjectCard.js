import React from "react";
import "./projects.css";

//! Import from src file
import canyon from "../assets/photos/canyon.jpg";
// import dam from "../assets/photos/dam.jpg";
// import eye from "../assets/photos/eye.jpg";
// import camdenLock from "../assets/photos/camdenLock.jpg";
// import mesa from "../assets/photos/mesa.jpg";
// import sand from "../assets/photos/sand.jpg";

//! Import from public file
// import photos from '../assets/photos';

export default function ProjectCard(props) {
  // console.log(props.image);
  // console.log(canyon);
  // console.log(dam);
  // console.log(eye);
  // console.log(camdenLock);
  // console.log(mesa);
  // console.log(sand);

  return (
    <div className="card">
      <div className="img-container">
        {/* testing this option */}
        {/* ! modify the projects.json file */}
        <img alt={props.image} src={canyon} />
        {/* Original line that worked before deploy to github */}
        {/* <img alt={props.image} src={props.image} /> */}

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
