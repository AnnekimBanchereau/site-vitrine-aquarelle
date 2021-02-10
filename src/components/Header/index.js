import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleBurgerNav = () => {console.log("open")};
  return (
    <header className="header">
      <div className="logo logo_scroll"><a href="">Agathe Chateauminois</a></div>
      {/* <nav>
        <ul className="navbar navbar_scroll">
          <li>
            <NavLink
              to="/"
              activeClassName="navbar_link-active"
              exact
            >
              Galerie
            </NavLink>
          </li>
          <li><NavLink to="/apropos" activeClassName="navbar_link-active">A propos</NavLink></li>
        </ul>
      </nav> */}
      <div className="navburger_block">
        <span className="navburger_block-title">Menu</span>
        <ul className="navburger_block-icon" onClick={toogleBurgerNav()}>
          <span />
          <span />
        </ul>
      </div>
      {/* <nav className="navburger">
        <ul className="navburger_link">
          <li>Galerie</li>
          <li>A propos</li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
