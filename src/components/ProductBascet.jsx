import React from "react";
import { useState } from "react";

const ProductBascet = ({ id, img, header, title, price, index, value }) => {
  const [current, setCurrent] = useState(1);
  const [curPrice, setCurPrice] = useState(price);

  const handleChange = (e) => {
    setCurrent(() => Number(e.target.value));
    setCurPrice(price * e.target.value);
    localStorage.setItem(`price${id}`, price * e.target.value);
  };

  const val =
    curPrice >= 100000
      ? `${curPrice.toString().slice(0, 3)} ${curPrice.toString().slice(-3)}`
      : `${curPrice.toString().slice(0, 2)} ${curPrice.toString().slice(-3)}`;

  return (
    <>
      <div className="product" key={index}>
        <img src={img} alt="" />
        <div>
          <h2>{header}</h2>
          <span>{title}</span>
          <h3>
            {curPrice !== 0
              ? curPrice > 1000000
                ? `${curPrice.toString().slice(0, 1)} ${val}`
                : val
              : "0"}
            руб.
          </h3>
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
          className="input"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
};

export default ProductBascet;
