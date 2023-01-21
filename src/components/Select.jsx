import React from "react";
import { useState } from "react";

const Select = () => {
  const [select, setSelect] = useState(false);
  const options = [
    {
      id: 1,
      name: "Порядок: сперва новые",
    },
    {
      id: 2,
      name: "сперва дорогие",
    },
    {
      id: 3,
      name: "сперва дешевые",
    },
  ];
  return (
    <select
      name="new"
      id="new"
      onClick={() => setSelect(!select)}
      defaultValue={0}
      className={select === true ? "active" : "non"}
    >
      {options.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
      {/* <option value="1" selected>
        Порядок: сперва новые
      </option>
      <option value="2">сперва дорогие</option>
      <option value="3">сперва дешевые</option> */}
    </select>
  );
};

export default Select;
