import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../sass/components/_Slideshow.scss';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (pictures.length <= 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="Logement" className="slideshow__image" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt="Logement" className="slideshow__image" />
      <button className="slideshow__arrow slideshow__arrow--left" onClick={goToPrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="slideshow__arrow slideshow__arrow--right" onClick={goToNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="slideshow__counter">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

export default Slideshow;