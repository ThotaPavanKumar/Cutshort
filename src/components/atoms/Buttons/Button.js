import React from "react";
import "./Button.css";

export const Button = ({ buttonText, handleClick }) => {
  return (
    // <div className="buttonContainer" type="submit">
    //   {buttonText}
    //

    <button type="submit" className="buttonContainer" onClick={handleClick}>
      {buttonText}
    </button>
  );
};
