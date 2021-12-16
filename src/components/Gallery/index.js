import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import ProjectsList from "../Projects";

function Gallery(currentCategory) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <ProjectsList />
    </section>
  );
}
export default Gallery;
