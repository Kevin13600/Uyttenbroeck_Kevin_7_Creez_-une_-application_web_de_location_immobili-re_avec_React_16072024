import React from 'react';
import { Link } from 'react-router-dom';

function Card({ logement }) {
  return (
    <Link
      to={`/logement/${logement.id}`}
      className="home__gallery-item"
    >
      <img
        src={logement.cover}
        alt={logement.title}
        className="home__gallery-image"
      />
      <h3 className="home__gallery-title">{logement.title}</h3>
    </Link>
  );
}

export default Card;