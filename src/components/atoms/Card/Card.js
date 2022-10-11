import React from "react";
import "./Card.css";
import user from "../../../assets/icons/user.png";
import group from "../../../assets/icons/group.png";

export const Card = ({ card, isActive, setUsage }) => {
  function handleCardSelect() {
    setUsage({ usage: card.id });
  }

  return (
    <div
      className="Card"
      onClick={handleCardSelect}
      style={{ border: isActive ? "2px solid #5A4AD1" : "2px solid #e2ebf6" }}
    >
      <img
        src={card.id === 1 ? user : group}
        alt={card.title}
        width="20rem"
      />
      <span className="title">{card.title}</span>
      <span className="text">{card.text}</span>
    </div>
  );
};
