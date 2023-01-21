import React from "react";
import Card from "./Card";
import "../styles/card.scss";
import { arr } from "../array";

const CardsBlock = () => {
  return (
    <div className="cards_block">
      {arr.map((item, index) => {
        return <Card {...item} key={index} />;
      })}
    </div>
  );
};

export default CardsBlock;
