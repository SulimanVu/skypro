import React from "react";
import "../styles/main.scss";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className="select">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
