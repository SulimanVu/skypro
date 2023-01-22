import React from "react";
import Card from "./Card";
import "../styles/card.scss";

const CardsBlock = ({ products }) => {
  return (
    <div className="cards_block">
      {products.map((item, index) => {
        return <Card {...item} key={index} />;
      })}
    </div>
  );
};

export default CardsBlock;
