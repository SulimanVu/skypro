import React from "react";
import Card from "./Card";

const CardsBlock = () => {
  const arr = [
    {
      img: require("../img/Rectangle 22.png"),
      header: "Кровать TATRAN",
      title:
        "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
      price: "120 000",
    },
    {
      img: require("../img/Rectangle 23.png"),
      header: "Кровать TATRAN",
      title:
        "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
      price: "120 000",
    },
    {
      img: require("../img/Rectangle 24.png"),
      header: "Кровать TATRAN",
      title:
        "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
      price: "120 000",
    },
    {
      img: require("../img/Rectangle 22 (1).png"),
      header: "Кровать TATRAN",
      title:
        "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
      price: "120 000",
    },
    {
      img: require("../img/Rectangle 23 (1).png"),
      header: "Кровать TATRAN",
      title:
        "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
      price: "120 000",
    },
    {
      img: require("../img/Rectangle 24 (1).png"),
      header: "Кровать TATRAN",
      title:
        "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
      price: "120 000",
    },
  ];
  return (
    <div className="cards_block">
      {arr.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
};

export default CardsBlock;
