import React from "react";
import "./Text.css";

export const Text = ({ heading, paragraph }) => {
  return (
    <div className="textContainer">
      <h1>{heading}</h1>
      <div className="paragraph">{paragraph}</div>
    </div>
  );
};
