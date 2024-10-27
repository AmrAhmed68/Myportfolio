// import React , {useState} from 'react';
// import { Navbar, Nav, Container } from "react-bootstrap";
// import photo1  from './Angular/Screenshot 2024-10-24 182903.png'
// import photo2  from './Angular/Screenshot 2024-10-24 190016.png'
// import photo3  from './Angular/Screenshot 2024-10-24 190035.png'
// import photo4  from './Angular/Screenshot 2024-10-24 190102.png'
// import photo5  from './Angular/Screenshot 2024-10-24 190125.png'
// import photo8  from './Angular/Screenshot 2024-10-24 190234.png'
// import photo9  from './Angular/Screenshot 2024-10-24 190250.png'
// import photo10  from './Angular/Screenshot 2024-10-24 190302.png'
// import logo from '../../assets/img/cropped_image.png';


// const images = [
//   { src: photo1, alt: 'Photo 1' },
//   { src: photo2, alt: 'Photo 2'  },
//   { src: photo3, alt: 'Photo 3' },
//   { src: photo4, alt: 'Photo 3' },
//   { src: photo5, alt: 'Photo 3' },
//   { src: photo8, alt: 'Photo 3' },
//   { src: photo9, alt: 'Photo 3' },
//   { src: photo10, alt: 'Photo 3' },
// ];

// const handleGithubRedirect = () => {
//   window.location.href = "https://github.com/AmrAhmed68/E-Commerce.git";
// };
// const handleVideo = () => {
//   window.location.href = "https://github.com/AmrAhmed68/assest/blob/main/18-14-42.mp4";
// };

// export const AngularProject = () => {
//   const [zoomedImage, setZoomedImage] = useState(null);

//   const openZoom = (image) => {
//     setZoomedImage(image);
//   };

//   const closeZoom = () => {
//     setZoomedImage(null);
//   };
  
//   return (
//     <div className="banner1">
//     <div className='font' >
//       <h1>Angular E-Commerce App</h1>
//       <p>This is the detailed view of the Angular E-Commerce project.</p>
//       <div className="horizontal-slider">
//         {images.map((image, index) => (
//           <div className="slider-item" key={index}>
//             <img className="slider-image" src={image.src} alt={image.alt}                 
//             onClick={() => openZoom(image)}
//             />
//             <div className="slider-caption">
//               <h3>{image.caption}</h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="pass" onClick={handleGithubRedirect}>
//           <span>Show in GitHub {'>>'}</span>
//         </button>
//         <p></p>
//       <button className="pass" onClick={handleVideo}>
//           <span>Watch Video {'>>'} </span>
//         </button>
//     </div>
//     {zoomedImage && (
//         <div className="zoom-modal" onClick={closeZoom}>
//           <span className="close">&times;</span>
//           <img className="zoomed-image" src={zoomedImage.src} alt={zoomedImage.alt} />  
//       </div>
//     )}
//     </div>
//   );
// };

import React, { useState } from 'react';
import photo1 from './Angular/Screenshot 2024-10-24 182903.png';
import photo2 from './Angular/Screenshot 2024-10-24 190016.png';
import photo3 from './Angular/Screenshot 2024-10-24 190035.png';
import photo4 from './Angular/Screenshot 2024-10-24 190102.png';
import photo5 from './Angular/Screenshot 2024-10-24 190125.png';
import photo8 from './Angular/Screenshot 2024-10-24 190234.png';
import photo9 from './Angular/Screenshot 2024-10-24 190250.png';
import photo10 from './Angular/Screenshot 2024-10-24 190302.png';

const images = [
  { src: photo1, alt: 'Photo 1' },
  { src: photo2, alt: 'Photo 2' },
  { src: photo3, alt: 'Photo 3' },
  { src: photo4, alt: 'Photo 4' },
  { src: photo5, alt: 'Photo 5' },
  { src: photo8, alt: 'Photo 8' },
  { src: photo9, alt: 'Photo 9' },
  { src: photo10, alt: 'Photo 10' },
];

const handleGithubRedirect = () => {
  window.location.href = "https://github.com/AmrAhmed68/E-Commerce.git";
};

const handleVideo = () => {
  window.location.href = "https://github.com/AmrAhmed68/assest/blob/main/18-14-42.mp4";
};

export const AngularProject = () => {
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
      <div className='font'>
        <h1>Angular E-Commerce App</h1>
        <p>This is the detailed view of the Angular E-Commerce project.</p>
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
                <h3>{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="pass" onClick={handleGithubRedirect}>
          <span>Show in GitHub {'>>'}</span>
        </button>
        <p></p>
        <button className="pass" onClick={handleVideo}>
          <span>Watch Video {'>>'}</span>
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

