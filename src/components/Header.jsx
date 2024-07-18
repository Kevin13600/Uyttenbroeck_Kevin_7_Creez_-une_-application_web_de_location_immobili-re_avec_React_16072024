// Header.jsx
import React from 'react';
import '../sass/components/Header';
import { Link } from 'react-router-dom';
import logo from '../assets/Kasa-logo.svg';


function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo du site" />
      <nav className="header__nav">
        <Link className="header__nav-item" to="/">Accueil</Link>
        <Link className="header__nav-item" to="/about">A Propos</Link></nav>
    </header>
  );
}

export default Header;