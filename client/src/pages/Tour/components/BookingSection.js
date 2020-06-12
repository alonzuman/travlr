import React from 'react'
import './BookingSection.css';

export default function BookingSection() {
  return (
    <div className='booking-section-container'>
      <div className='tour-dates-intro'>
        hi
      </div>
      <button className='primary-button booking-button' onClick={() => console.log('opening calendar...')}>להזמנת מקום</button>
    </div>
  )
}
