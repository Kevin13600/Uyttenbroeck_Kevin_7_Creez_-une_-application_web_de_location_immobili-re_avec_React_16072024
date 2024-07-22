import React from 'react';

function Host({ name, picture }) {
  return (
    <div className="host">
      <img src={picture} alt={name} className="host__picture" />
      <p className="host__name">{name}</p>
    </div>
  );
}

export default Host;

