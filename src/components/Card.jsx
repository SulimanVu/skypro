import React, { useState } from "react";

const Card = ({ id, img, header, title, price, index }) => {
  const [storage, setStorage] = useState("");

  const handleLike = () => {
    if (!storage.includes(id)) {
      setStorage(
        localStorage.setItem("cards", `${localStorage.getItem("cards")} ${id}`)
      );
    }
  };
  const value =
    price > 100000
      ? `${price.toString().slice(0, 3)} ${price.toString().slice(-3)}`
      : `${price.toString().slice(0, 2)} ${price.toString().slice(-3)}`;

  return (
    <div className="card" key={index}>
      <img
        src={require("../img/icons8-favorite-24.png")}
        alt="#"
        className="like"
      />
      <img
        src={require("../img/icons8-shopping-bag-50.png")}
        alt="#"
        className="bag"
        onClick={() => handleLike()}
      />
      <img src={img} alt="#" />
      <div className="description">
        <h2>{header}</h2>
        <span>{title}</span>
        <h3>{value} руб.</h3>
      </div>
    </div>
  );
};

export default Card;
