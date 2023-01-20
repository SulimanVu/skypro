import React from "react";
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="link" to="/">
        <h1>Интерьер</h1>{" "}
      </Link>
      <div>
        <span>Каталог</span>
        <Link className="link" to="/basket">
          <span>Корзина</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
