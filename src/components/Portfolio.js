import React from "react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Wrapper from './Wrapper';
import projects from "../projects.json";
import "./projects.css";

export default function Portfolio() {
  const [projectsList, setProjectsList] = useState(projects);
  console.log(projects);
  return (
    <Wrapper>
      {projectsList.map((projects) => {
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
    </Wrapper>
  );
}
