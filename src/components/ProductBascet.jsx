import React from "react";
import { useState } from "react";

const ProductBascet = ({ img, header, title, price, index }) => {
  const [current, setCurrent] = useState(1);
  const [curPrice, setCurPrice] = useState(Number(price));
  const handleChange = (e) => {
    setCurrent(() => Number(e.target.value));
    setCurPrice(price * e.target.value);
    localStorage.setItem("price", curPrice);
  };

  return (
    <>
      <div className="product" key={index}>
        <img src={img} alt="" />
        <div>
          <h2>{header}</h2>
          <span>{title}</span>
          <h3>{curPrice} руб.</h3>
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
      <hr />
    </>
  );
};

export default ProductBascet;
