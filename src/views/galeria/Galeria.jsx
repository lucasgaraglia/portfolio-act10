import React, { useState, useEffect } from 'react';
import './galeria.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handleKeyDown = (event) => {
    if (currentIndex !== null) {
      if (event.key === 'ArrowLeft') {
        showPrev();
      } else if (event.key === 'ArrowRight') {
        showNext();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div className="container">
      <div className="gallery">
        <h1>Galería de fotos</h1>
        <div className="thumbnails">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} onClick={() => openModal(index)} />
          ))}
        </div>
        {currentIndex !== null && (
          <div className="modal" onClick={(e) => e.target.className === 'modal' && closeModal()}>
            <span className="cerrar" onClick={closeModal}>&times;</span>
            <img src={images[currentIndex]} alt={`Ampliación de imagen ${currentIndex + 1}`} />
            <div className="navigation">
              <button id="prevBtn" onClick={showPrev}>Anterior</button>
              <button id="nextBtn" onClick={showNext}>Siguiente</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galeria;