import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

function Header({ items }) {
  return (
    <header className="header">
      <Link className="logo" to={"/"}></Link>
      <nav className="header__nav">
        <ul className="header__ul">
          {items.map((elem) => (
            <Link className="header__link" key={elem.id} to={elem.path}>
              {elem.value}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
