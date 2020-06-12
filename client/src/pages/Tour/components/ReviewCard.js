import React from 'react';
import ReviewStars from './ReviewStars'
import './ReviewCard.css';

export default function ReviewCard({ review }) {
  function parseISOString(dateInput) {
    var b = dateInput.split(/\D+/);
    const editedDate = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    const month = editedDate.toString().split(' ')[1]
    const year = editedDate.toString().split(' ')[3]
    const finalDate = `${month} ${year}`
    return finalDate;
  }

  return (
    <div className='review-card-container'>
      <div className='review-card-header'>
        <img className='avatar extra-small' src='https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt={`הביקורת של ${review.user_first_name} `} />
        <div className='name-and-date'>
          <b>{review.user_first_name}</b>
          <div className='subtitle'>{parseISOString(review.created_at)}</div>
        </div>
      </div>
      <ReviewStars rating={Number(parseInt(review.rating)).toFixed(0)} />
      <p>{review.review_text}</p>
    </div>
  )
}
