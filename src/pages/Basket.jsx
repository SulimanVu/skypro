import React, { useState } from "react";
import { useEffect } from "react";
import ProductBascet from "../components/ProductBascet";

const Basket = () => {
  const arr = [
    {
      img: require("../img/Rectangle 22.png"),
      header: "Кровать TATRAN",
      title:
        "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
      price: "120000",
    },
    {
      img: require("../img/Rectangle 23.png"),
      header: "Кресло VILORA",
      title:
        "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
      price: "21000",
    },
    {
      img: require("../img/Rectangle 24.png"),
      header: "Стол MENU",
      title: "Европейский дуб - отличается особой прочностью и стабильностью.",
      price: "34000",
    },
  ];
  const [result, setResult] = useState(localStorage.getItem("price"));

  useEffect(() => {
    setResult(localStorage.getItem("price"));
  }, [result]);

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
        <div className="buttons">
          <button>Очистить корзину</button>
          <button>Продолжить покупки</button>
        </div>
      </div>
      <div className="request">
        <h2>Оформление заказа</h2>
        <form>
          <div className="form__item">
            <input required id="name" type="text" />
            <label>Имя Фамилия</label>
          </div>
          <div className="form__item">
            <input required id="tel" type="tel" />
            <label>+7 904 000 80 80</label>
          </div>
          <div className="form__item">
            <input required id="adres" type="text" />
            <label>Адрес доставки</label>
          </div>
        </form>
        <div className="price">
          <h2>
            Итого:
            <b>
              {arr.reduce((sum, item) => Number(sum) + Number(item.price), 0)}{" "}
              руб.
            </b>
          </h2>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
