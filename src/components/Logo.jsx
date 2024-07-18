import React from 'react';
import { ReactComponent as LogoSVG } from '../assets/Kasa-logo.svg';

function Logo({ className, color, width, height }) {
    return (
      <LogoSVG
        className={className}
        fill={color}
        style={{ 
          width: width,
          height: height
        }}
      />
    );
  }

export default Logo;

