import React from 'react';
import './TourDescription.css';

export default function TourDescription({ description }) {
  return (
    <div className='tour-page-description rtl'>
      <b>תיאור</b>
      <p>{description}</p>
    </div>
  )
}
