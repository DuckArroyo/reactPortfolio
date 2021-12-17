import React from "react";
import "./projects.css";

export default function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}