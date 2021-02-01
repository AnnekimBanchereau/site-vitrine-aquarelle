import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Header = () => (
  <div className="header">
    <div className="logo logo_scroll"><a href="">Agathe Chateauminois</a></div>
    <nav>
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
    </nav>
  </div>
);

export default Header;
