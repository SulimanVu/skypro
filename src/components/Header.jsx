import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [wind, setWind] = useState(0);

  useEffect(() => {
    setWind(window.innerWidth);
  }, []);

  return (
    <header>
      <Link className="link" to="/">
        <h1>Интерьер</h1>
      </Link>
      {wind > 450 ? (
        <div>
          <Link className="link" to="">
            <span>Каталог</span>
          </Link>
          <Link className="link" to="/basket">
            <span>Корзина</span>
          </Link>
        </div>
      ) : (
        <div className="images">
          <Link className="link" to="/">
            <img src={require("../img/icons8-table-32.png")} alt="#" />
          </Link>
          <Link className="link" to="/basket">
            <img src={require("../img/icons8-shopping-cart-24.png")} alt="#" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
