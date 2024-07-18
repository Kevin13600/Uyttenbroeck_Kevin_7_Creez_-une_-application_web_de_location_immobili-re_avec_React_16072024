// Header.jsx
import React from 'react';
import '../sass/components/_Header.scss';
import { Link } from 'react-router-dom';
import Logo from './Logo';


function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <nav className="header__nav">
        <Link className="header__nav-item" to="/">Accueil</Link>
        <Link className="header__nav-item" to="/about">A Propos</Link></nav>
    </header>
  );
}

export default Header;

