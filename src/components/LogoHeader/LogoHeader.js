import React from "react";
import logo from "../../assets/icons/logo.svg";
import "./LogoHeader.css";

export const LogoHeader = () => {
  return (
    <div className="Header">
      <img src={logo} alt="Eden_Logo" className="img" />
      <span className="text">Eden</span>
    </div>
  );
};
