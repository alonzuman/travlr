import Slider from "react-slick";
import './TripPhotosCarousel.css';
import CarouselPhoto from './CarouselPhoto';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'

export default function TripPhotosCarousel({ photos }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        {photos.map(photo => <CarouselPhoto photo={photo} key={photo} />)}
      </Slider>
    </div>
  );
}
