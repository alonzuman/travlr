import React from 'react'

export default function ReviewStars({ rating }) {
  return (
    <div className='review-starts-container'>
      {Array(parseInt(rating)).fill().map(() => <i key={Math.random()} className="primary fas fa-star"></i>)}
    </div>
  )
}
