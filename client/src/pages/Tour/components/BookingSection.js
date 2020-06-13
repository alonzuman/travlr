import React from 'react'
import './BookingSection.css';


export default function BookingSection({ handleBook }) {
  return (
    <div className='booking-section-container'>
      <div className='tour-dates-intro'>
        תאריכים עתידיים
      </div>
      <button onClick={handleBook} className='primary-button booking-button'>להזמנת מקום</button>
    </div >
  )
}
