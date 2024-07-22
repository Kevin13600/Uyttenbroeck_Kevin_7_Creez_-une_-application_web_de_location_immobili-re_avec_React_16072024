import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import data from '../data/logements.json';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';
import Host from '../components/Host';
import Rating from '../components/Rating';
import '../sass/pages/_logement.scss';

function Logement() {
  const { id } = useParams();
  const logement = data.find(item => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} />
      
      <div className="logement__info">
        <div className="logement__header">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} tagText={tag} />
            ))}
          </div>
        </div>
        
        <div className="logement__details">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="logement__collapse">
        <Collapse 
          key="description" 
          title="Description" 
          content={logement.description} 
        />
        <Collapse 
          key="equipments" 
          title="Équipements" 
          content={
            <ul>
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          } 
        />
      </div>
    </div>
  );
}

export default Logement;