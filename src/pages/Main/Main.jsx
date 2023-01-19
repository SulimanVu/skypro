import React from "react";
import CardsBlock from "./components/CardsBlock";
import Header from "./components/Header";
import Select from "./components/Select";

const Main = () => {
  return (
    <div className="App">
      <Header />
      <Select />
      <CardsBlock />
    </div>
  );
};

export default Main;
