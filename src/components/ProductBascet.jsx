import React from "react";
import { useState } from "react";

const ProductBascet = ({ img, header, title, price, index }) => {
  const [current, setCurrent] = useState(1);
  const [curPrice, setCurPrice] = useState(price);

  const handleChange = (e) => {
    setCurrent(() => Number(e.target.value));
    setCurPrice(price * e.target.value);
    localStorage.setItem("price", curPrice);
  };

  const value =
    curPrice > 100000
      ? `${curPrice.toString().slice(0, 3)} ${curPrice.toString().slice(-3)}`
      : `${curPrice.toString().slice(0, 2)} ${curPrice.toString().slice(-3)}`;

  return (
    <>
      <div className="product" key={index}>
        <img src={img} alt="" />
        <div>
          <h2>{header}</h2>
          <span>{title}</span>
          <h3>{curPrice !== 0 ? value : "0"} руб.</h3>
          <div>
            <span>Избранные</span>
            <span>Удалить</span>
          </div>
        </div>
        <input
          type="number"
          value={current}
          min="0"
          max="10"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
};

export default ProductBascet;
