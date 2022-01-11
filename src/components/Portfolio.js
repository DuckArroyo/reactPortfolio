import React from "react";
//!Use State not being used becasue we are not changing the state of the information
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsJson from "../projects.json";
import "./projects.css";

export default function Portfolio() {
  const [projectsList] = useState(projectsJson);
  // console.log(projectsList);
  // console.log(projectsJson);
  return (
    <div className="wrapper">
      {projectsJson.map((projects) => {
        return (
          <ProjectCard
            id={projects.id}
            key={projects.id}
            name={projects.name}
            gitHub={projects.gitHub}
            liveLink={projects.liveLink}
            image={projects.image}
          />
        );
      })}
    </div>
  );
}
