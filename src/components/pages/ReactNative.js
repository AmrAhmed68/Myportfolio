import React , { useState }from 'react';
import photo1  from './ReactNative/Screenshot_20241021_000641.jpg'
import photo2  from './ReactNative/Screenshot_20241021_000755.jpg'
import photo3  from './ReactNative/Screenshot_20241021_000824.jpg'
import photo4  from './ReactNative/Screenshot_20241021_000845.jpg'
import photo5  from './ReactNative/Screenshot_20241021_000900.jpg'
import photo6  from './ReactNative/Screenshot_20241021_000913.jpg'
import photo7  from './ReactNative/Screenshot_20241021_000930.jpg'
import photo8  from './ReactNative/Screenshot_20241021_000956.jpg'
import photo9  from './ReactNative/Screenshot_20241021_001028.jpg'
import photo10  from './ReactNative/Screenshot_20241021_001047.jpg'
import photo11  from './ReactNative/Screenshot_20241021_001122.jpg'
import photo12  from './ReactNative/Screenshot_20241021_000725.jpg'
import photo13  from './ReactNative/Screenshot_20241022_191757_com.amr357.TecStore.jpg'
import photo14  from './ReactNative/Screenshot_20241022_191801_com.amr357.TecStore.jpg'
import photo15  from './ReactNative/Screenshot_20241022_191812_com.amr357.TecStore.jpg'
import photo16  from './ReactNative/Screenshot_20241022_191828_com.amr357.TecStore.jpg'
import photo17  from './ReactNative/Screenshot_20241022_191841_com.amr357.TecStore.jpg'


const images = [
  { src: photo1, alt: 'Photo 1' },
  { src: photo2, alt: 'Photo 2'  },
  { src: photo3, alt: 'Photo 3' },
  { src: photo4, alt: 'Photo 3' },
  { src: photo5, alt: 'Photo 3' },
  { src: photo6, alt: 'Photo 3' },
  { src: photo7, alt: 'Photo 3' },
  { src: photo8, alt: 'Photo 3' },
  { src: photo9, alt: 'Photo 3' },
  { src: photo10, alt: 'Photo 3' },
  { src: photo11, alt: 'Photo 3' },
  { src: photo12, alt: 'Photo 3' },
  { src: photo13, alt: 'Photo 3' },
  { src: photo14, alt: 'Photo 3' },
  { src: photo15, alt: 'Photo 3' },
  { src: photo16, alt: 'Photo 3' },
  { src: photo17, alt: 'Photo 3' },
];

const handleGithubRedirect = () => {
  window.location.href = "https://github.com/AmrAhmed68/TecStore.git";
};
const handleVideo = () => {
  window.location.href = "https://github.com/AmrAhmed68/assest/blob/main/SVID_20241023_221146_1.mp4";
};

export const ReactNative = () => {
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
      <h1>React Native E-Commerce App</h1>
      <p>This is the detailed view of the React Native E-Commerce project.</p>
      <div className="horizontal-slider">
        {images.map((image, index) => (
          <div className="slider-item" key={index}>
            <img 
            className="slider-image" 
            src={image.src} 
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
          <span>Watch Video {'>>'} </span>
        </button>
    </div>
    {zoomedImage && (
        <div className="zoom-modal" onClick={closeZoom}>
          <span className="close">&times;</span>
          <img className="zoomed-image1" src={zoomedImage.src} alt={zoomedImage.alt} />
        </div>
      )}
    </div>
  );
};


