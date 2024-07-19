import React from 'react';
import '../sass/pages/_home.scss';
import Banner from '../components/Banner';
import natureImage from '../assets/nature.svg';
import Card from '../components/Card';
import Data from '../data/logements.json';

function Home() {
  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" image={natureImage} />
      <div className="home__gallery">
        {Data.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;