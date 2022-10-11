import React from "react";
import "./TextInput.css";

export const TextInput = ({ placeholder, label, optional }) => {
  return (
    <div className="inputContainer">
      <label>
        {label}
        {optional}
      </label>
      <br />
      <input placeholder={placeholder} />
    </div>
  );
};
