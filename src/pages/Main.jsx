import React, { useState } from "react";
import CardsBlock from "../components/CardsBlock";
import Select from "../components/Select";
import { arr } from "../array";
const Main = () => {
  const [products, setProducts] = useState(arr);

  const [selectedSort, setSelectedSort] = useState("");

  const sortProducts = (sort) => {
    setSelectedSort(sort);
    if (sort === "min") {
      setProducts([...products].sort((a, b) => a["price"] - b["price"]));
    }
    if (sort === "max") {
      setProducts([...products].sort((a, b) => b["price"] - a["price"]));
    }
  };
  return (
    <div className="main">
      <Select
        defaultValue={"Выбрать порядок"}
        options={[
          { value: "min", name: "Порядок: сперва дешевле" },
          { value: "max", name: "Порядок: сперва дороже" },
        ]}
        value={selectedSort}
        onChange={sortProducts}
      />
      <CardsBlock products={products} />
    </div>
  );
};

export default Main;
