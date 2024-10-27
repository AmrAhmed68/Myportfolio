import React, { useState } from 'react';
import photo1 from './React/Screenshot 2024-10-25 154708.png';
import photo2 from './React/Screenshot 2024-10-25 154728.png';
import photo3 from './React/Screenshot 2024-10-25 154740.png';
import photo4 from './React/Screenshot 2024-10-25 154752.png';
import photo5 from './React/Screenshot 2024-10-25 154811.png';
import photo8 from './React/Screenshot 2024-10-25 155123.png';
import photo9 from './React/Screenshot 2024-10-25 155134.png';

const images = [
  { src: photo1, alt: 'Photo 1' },
  { src: photo2, alt: 'Photo 2' },
  { src: photo3, alt: 'Photo 3' },
  { src: photo4, alt: 'Photo 4' },
  { src: photo5, alt: 'Photo 5' },
  { src: photo8, alt: 'Photo 8' },
  { src: photo9, alt: 'Photo 9' },
];

const handleGithubRedirect = () => {
  window.location.href = "https://github.com/AmrAhmed68/Final_CS309.git";
};

export const ReactProject = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const openZoom = (image) => {
    setZoomedImage(image);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };
  const goToHome = () => {
    window.location.href = '/';  
  };


  return (
    <div className="banner1">
         <div className="back-to-home" onClick={goToHome}>
       Home
      </div>
      <div className="font">
        <h1>React E-Commerce App</h1>
        <p>This is the detailed view of the React E-Commerce project.</p>
        <div className="horizontal-slider">
          {images.map((image, index) => (
            <div className="slider-item" key={index}>
              <img
                className="slider-image"
                src={image.src}
                alt={image.alt} 
                onClick={() => openZoom(image)}
              />
              <div className="slider-caption">
              </div>
            </div>
          ))}
        </div>
        <button className="pass" onClick={handleGithubRedirect}>
          <span>Show in GitHub {'>>'}</span>
        </button>
        <p></p>
        
      <button className="pass" >
          <span>Watch Video {'>>'} </span>
        </button>
      </div>

      {zoomedImage && (
        <div className="zoom-modal" onClick={closeZoom}>
          <span className="close">&times;</span>
          <img className="zoomed-image" src={zoomedImage.src} alt={zoomedImage.alt} />
        </div>
      )}
    </div>
  );
};
