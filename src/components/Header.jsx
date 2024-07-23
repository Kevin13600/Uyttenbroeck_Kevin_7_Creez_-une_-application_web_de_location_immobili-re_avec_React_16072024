// Header.jsx
import React from 'react';
import '../sass/components/_Header.scss';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <nav className="header__nav">
        <NavLink 
          className={({ isActive }) => 
            isActive ? "header__nav-item active" : "header__nav-item"
          } 
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            isActive ? "header__nav-item active" : "header__nav-item"
          } 
          to="/about"
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;