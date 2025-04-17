import React, { useState } from 'react';
import './Photos.css';

const photos = [
    'images/img-12.jpg', 
    'images/img-15.jpg',
    'images/img-10.jpg',
    'images/img-3.jpg',
    'images/img-14.jpg',
    'images/img-9.jpg',
    'images/img-4.jpg',
    'images/img-2.jpg',
    'images/img-11.jpg',
    'images/img-13.jpg'
    
    
];

const Products = () => {
    const [fullscreenPhoto, setFullscreenPhoto] = useState(null);

    const openFullscreen = (photo) => {
        setFullscreenPhoto(photo);
    };

    const closeFullscreen = () => {
        setFullscreenPhoto(null);
    };

    return (
      <>
      <h1 className='ph'>PHOTOS</h1>
        <div className="photo-gallery">
            {photos.map((photo, index) => (
                <div key={index} className="photo-container" onClick={() => openFullscreen(photo)}>
                    <img src={photo} alt={`Photo ${index + 1}`} className="photo" />
                </div>
            ))}
            {fullscreenPhoto && (
                <div className="fullscreen-overlay" onClick={closeFullscreen}>
                    <img src={fullscreenPhoto} alt="Fullscreen" className="fullscreen-photo" />
                </div>
            )}
        </div></>
    );
};

export default Products;
