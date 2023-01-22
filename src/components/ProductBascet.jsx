import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/basketSlice";

const ProductBascet = ({ img, header, title, price, index }) => {
  const [current, setCurrent] = useState(1);
  const [curPrice, setCurPrice] = useState(price);
  const [sravnenie, setSravnenie] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCurrent(() => Number(e.target.value));
    setCurPrice(price * e.target.value);
    if (sravnenie < e.target.value) {
      dispatch(increment(Number(price)));
    } else {
      dispatch(decrement(Number(price)));
    }
    setSravnenie(e.target.value);
  };

  const val =
    curPrice >= 100000
      ? `${curPrice.toString().slice(0, 3)} ${curPrice.toString().slice(-3)}`
      : `${curPrice.toString().slice(0, 2)} ${curPrice.toString().slice(-3)}`;

  useEffect(() => {
    dispatch(increment(Number(price)));
  }, []);
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
