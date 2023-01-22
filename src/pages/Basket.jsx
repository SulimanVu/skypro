import React, { useState } from "react";
import ProductBascet from "../components/ProductBascet";
import { arr } from "../array";
import { useSelector } from "react-redux";
import "../styles/basket.scss";

const Basket = () => {
  const basket = useSelector((state) => state.basketSlice.price);

  const [product, setProduct] = useState(
    arr.filter((item) => localStorage.getItem("cards")?.includes(item.id)) ||
      null
  );

  const hendleDelete = () => {
    setProduct(null);
    localStorage.clear("cards");
  };

  const val =
    basket >= 100000
      ? `${basket.toString().slice(0, 3)} ${basket.toString().slice(-3)}`
      : `${basket.toString().slice(0, 2)} ${basket.toString().slice(-3)}`;

  return (
    <div className="basket">
      <div className="prod">
        <div className="header">
          <span>Товар</span>
          <span>К-во</span>
        </div>
        <div className="product_block">
          {product?.map((item, index) => {
            return <ProductBascet {...item} key={index} />;
          })}
          {product === null && "Нет товаров"}
        </div>
        <div className="buttons">
          <button onClick={() => hendleDelete()}>Очистить корзину</button>
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
              {basket !== 0
                ? basket > 1000000
                  ? `${basket.toString().slice(0, 1)} ${val}`
                  : val
                : "0"}{" "}
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
