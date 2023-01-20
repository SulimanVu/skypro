import React from "react";
import Card from "./Card";
import "../styles/card.scss";

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
      header: "Кресло VILORA",
      title:
        "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
      price: "21 000",
    },
    {
      img: require("../img/Rectangle 24.png"),
      header: "Стол MENU",
      title: "Европейский дуб - отличается особой прочностью и стабильностью.",
      price: "34 000",
    },
    {
      img: require("../img/Rectangle 22 (1).png"),
      header: "Диван ASKESTA",
      title:
        "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
      price: "68 000",
    },
    {
      img: require("../img/Rectangle 23 (1).png"),
      header: "Кресло LUNAR",
      title:
        "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
      price: "40 000",
    },
    {
      img: require("../img/Rectangle 24 (1).png"),
      header: "Шкаф Nastan",
      title: "Мебель может быть оснащена разнообразными системами подсветки.",
      price: "80 000",
    },
  ];
  return (
    <div className="cards_block">
      {arr.map((item, index) => {
        return <Card {...item} key={index} />;
      })}
    </div>
  );
};

export default CardsBlock;
