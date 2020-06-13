import React from 'react';
import { bookTour } from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './BookingForm.css';

export default function BookingForm({ tour }) {
  const dispatch = useDispatch()
  const locale = useSelector(state => state.locale)

  return (
    <div style={{ direction: locale.direction }} className='form-container'>
      <h1>{locale.translation.bookTour}</h1>
      <h3>{locale.translation.chooseDates}</h3>
      <h3>סה״כ לתשלום</h3>
      <button className='primary-button' onClick={() => dispatch(bookTour(tour))}>{locale.translation.bookButton}</button>
    </div>
  )
}
