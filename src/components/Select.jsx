import React from "react";
import { useState } from "react";

const Select = () => {
  const [select, setSelect] = useState(false);
  return (
    <select
      name="new"
      id="new"
      onClick={() => setSelect(!select)}
      className={select === true && "active"}
    >
      <option selected>Порядок: сперва новые</option>
      <option>сперва старые</option>
      <option>сперва дорогие</option>
      <option>сперва дешевые</option>
    </select>
  );
};

export default Select;
