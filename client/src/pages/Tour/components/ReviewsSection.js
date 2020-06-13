import './ReviewsSection.css';
// import ReviewsCarousel from './ReviewsCarousel';
import ReviewCard from './ReviewCard';
import React, { useState, useEffect } from 'react';

export default function ReviewsSection({ reviews }) {
  const [average, setAverage] = useState(null);
  const [reviewsOpen, setReviewsOpen] = useState(false);

  const averageRating = () => {
    let ratings = []
    reviews.forEach(review => ratings.push(parseInt(review.rating)))
    let sum = 0;
    ratings.forEach(rating => sum += rating)
    setAverage(Number(sum / ratings.length).toFixed(1))
  }

  useEffect(() => averageRating(), [])

  return (
    <div className='review-section-container rtl'>
      <b>ביקורות <span>({average > 0 && average} <i className="primary fas fa-star"></i>)</span></b>
      {reviews.length === 0 && <div className='subtitle'>אין ביקורות על טיול זה</div>}
      {reviews.length > 0 && !reviewsOpen &&
        <div className='single-review'>
          <ReviewCard review={reviews[0]} />
          <button className='text-button' onClick={() => setReviewsOpen(true)}>הצג את כל הביקורות</button>
        </div>
      }
      {(reviews.length > 0 && reviewsOpen) &&
        <div>
          <ul>
            {reviews.map(review => <ReviewCard review={review} key={review.review_id} />)}
          </ul>
          <button className='text-button' onClick={() => setReviewsOpen(false)}>הסתר</button>
        </div>
      }
    </div>
  )
}
