import React from 'react';
import './PhotosCarousel.css';
import Carousel from 'nuka-carousel';

export default function PhotosCarousel({ photos }) {
  return (
    <div className='photos-carousel-container'>
      <Carousel withoutControls={false}>
        {photos.map(photo => <img className='carousel-photo' src={photo} key={photo} alt={''} />)}
      </Carousel>
    </div>
  )
}
