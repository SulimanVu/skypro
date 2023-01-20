import React from "react";

const Card = ({ img, header, title, price, index }) => {
  return (
    <div className="card" key={index}>
      <img src={img} alt="#" />
      <div className="description">
        <h2>{header}</h2>
        <span>{title}</span>
        <h3>{price} руб.</h3>
      </div>
    </div>
  );
};

export default Card;
