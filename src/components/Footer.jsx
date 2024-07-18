// src/components/Footer.jsx
import React from 'react';
import Logo from './Logo';
import '../sass/components/_Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Logo className="footer__logo" color="#FFFFFF" width="122" height="40" />
      <p className="footer__copyright">© 2024 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;