import React from 'react';
import '../sass/components/_Footer.scss';
import natureImage from '../assets/nature.svg';

function Banner({title=null, image}) {
  return (
    <div className="home__hero">
        <img src={natureImage} alt="Nature" className="home__hero-image" />
        {
            title && <h1 className="home__hero-title">{title}</h1>
        }
    </div>
  );
}

export default Banner;