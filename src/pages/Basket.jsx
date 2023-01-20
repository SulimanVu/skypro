import React from "react";
import ProductBascet from "../components/ProductBascet";

const Basket = () => {
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
  ];
  return (
    <div className="basket">
      <div className="prod">
        <div className="header">
          <span>Товар</span>
          <span>К-во</span>
        </div>
        <hr />
        <div className="product_block">
          {arr.map((item, index) => {
            return <ProductBascet {...item} key={index} />;
          })}
        </div>
      </div>
      <div className="request"></div>
    </div>
  );
};

export default Basket;
