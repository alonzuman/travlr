import React from 'react';
import './TourDescription.css';
import { useSelector } from 'react-redux'

export default function TourDescription({ description }) {
  const locale = useSelector(state => state.locale);

  return (
    <div style={{ direction: locale.direction }} className='tour-page-description'>
      <b>{locale.translation.description}</b>
      <p>{description}</p>
    </div>
  )
}
