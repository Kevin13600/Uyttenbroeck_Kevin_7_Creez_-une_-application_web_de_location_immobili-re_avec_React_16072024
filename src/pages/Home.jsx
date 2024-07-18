import React from 'react';
import '../sass/pages/_home.scss';
import natureImage from '../assets/nature.svg';

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <img src={natureImage} alt="Nature" className="home__hero-image" />
        <h1 className="home__hero-title">Chez vous, partout et ailleurs</h1>
      </div>
      <section className="home__gallery">
        {/* logements */}
      </section>
    </div>
  );
}

export default Home;