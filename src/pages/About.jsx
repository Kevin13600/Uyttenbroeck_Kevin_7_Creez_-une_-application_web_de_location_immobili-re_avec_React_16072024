import React from 'react';
import Banner from '../components/Banner';
import natureImage from '../assets/nature.svg';

function About() {
  return (
    <div>
      <Banner image={natureImage} />
      <h1>À propos</h1>
      <p>Contenu de la page À propos à venir.</p>
    </div>
  );
}

export default About;