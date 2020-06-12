import React from 'react';
import Carousel from 'nuka-carousel';
import ReviewCard from './ReviewCard';
import './ReviewsCarousel.css';

export default function ReviewsCarousel({ reviews }) {
  return (
    <Carousel className='reviews-carousel'>
      {reviews.map(review => <ReviewCard review={review} />)}
    </Carousel>
  )
}
