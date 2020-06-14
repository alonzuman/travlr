import React from 'react';
import './BookingSection.css';
import { useSelector } from 'react-redux';

export default function BookingSection({ handleBook }) {
  const locale = useSelector(state => state.locale);
  return (
    <div style={{ direction: locale.direction }} className='booking-section-container'>
      <div className='tour-dates-intro'>
        תאריכים עתידיים
      </div>
      <button onClick={handleBook} className='primary-button booking-button'>{locale.translation.bookTour}</button>
    </div >
  )
}
