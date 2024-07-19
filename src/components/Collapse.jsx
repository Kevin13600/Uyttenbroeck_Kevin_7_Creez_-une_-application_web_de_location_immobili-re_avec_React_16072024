import React, { useState } from 'react';
import '../sass/components/_Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <FontAwesomeIcon 
          icon={faChevronUp} 
          className={`collapse__arrow ${isOpen ? 'open' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="collapse__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;