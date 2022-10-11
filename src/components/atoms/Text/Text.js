import React from "react";
import "./Text.css";

export const Text = ({ heading, paragraph }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </div>
  );
};
