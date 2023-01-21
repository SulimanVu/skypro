import React, { useState } from "react";
import { useEffect } from "react";
import ProductBascet from "../components/ProductBascet";
import { arr } from "../array";

const Basket = () => {
  const [result, setResult] = useState(localStorage.getItem("price"));

  const [product, setProduct] = useState(
    arr.filter((item) => localStorage.getItem("cards")?.includes(item.id)) ||
      null
  );

  const [prod_sum, setProd] = useState(
    Number(localStorage.getItem("price1")) +
      Number(localStorage.getItem("price2")) +
      Number(localStorage.getItem("price3")) +
      Number(localStorage.getItem("price4")) +
      Number(localStorage.getItem("price5")) +
      Number(localStorage.getItem("price6"))
  );

  const hendleDelete = () => {
    setProduct(null);
    localStorage.clear("cards");
  };

  useEffect(() => {
    setResult(localStorage.getItem("price"));
    setProd(
      Number(localStorage.getItem("price1")) +
        Number(localStorage.getItem("price2")) +
        Number(localStorage.getItem("price3")) +
        Number(localStorage.getItem("price4")) +
        Number(localStorage.getItem("price5")) +
        Number(localStorage.getItem("price6"))
    );
  }, [result, product]);

  return (
    <div className="basket">
      <div className="prod">
        <div className="header">
          <span>Товар</span>
          <span>К-во</span>
        </div>
        <hr />
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
            Итого: &nbsp;
            <b>
              {prod_sum}
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
