import React from 'react';
import '../sass/components/_Footer.scss';

function Banner({title=null, image}) {
  return (
    <div className="home__hero">
        <img src={image} alt="Banner" className="home__hero-image" />
        {
            title && <h1 className="home__hero-title">{title}</h1>
        }
    </div>
  );
}

export default Banner;