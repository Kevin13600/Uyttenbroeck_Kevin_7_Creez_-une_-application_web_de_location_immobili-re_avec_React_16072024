import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import data from '../data/logements.json';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';
import Host from '../components/Host';
import Rating from '../components/Rating';
import '../sass/pages/_logement.scss';

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const logement = data.find(item => item.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/not-found');
    }
  }, [logement, navigate]);

  if (!logement) return null; 

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
