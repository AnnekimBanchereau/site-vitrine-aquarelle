import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './styles.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleBurgerNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div className="logo"><a href="/">Agathe Chateauminois</a></div>
      <nav className="navbar">
        <ul>
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
      <div className="navburger_block" onClick={toogleBurgerNav}>
        <span className={classNames('navburger_block-title', { 'navburger_block-title-none': isOpen })}>Menu</span>
        <ul className={classNames({ 'navburger_block-icon': !isOpen }, { 'navburger_block-icon-cross': isOpen })}>
          <span />
          <span />
        </ul>
      </div>
      <nav className={classNames('navburger', { 'navburger-active': isOpen })}>
        <ul className="navburger_link">
          <li>
            <NavLink to="/" activeClassName="navburger_link-active" exact onClick={toogleBurgerNav}>
              Galerie
            </NavLink>
          </li>
          <li>
            <NavLink to="/apropos" activeClassName="navburger_link-active" onClick={toogleBurgerNav}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
