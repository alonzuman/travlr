import React from 'react';
import './TourCard.css';
import { Link } from 'react-router-dom';

export default function TourCard({ tour }) {
  return (
    <Link to={`tours/${tour.tour_id}`}>
      <div className='tour-card-container'>
        <img className='tour-card-photo' src='https://loremflickr.com/320/240' alt={tour.tour_name} />
        <div className='tour-card-details'>
          <h2>{tour.tour_name}</h2>
          <div className='tour-guide-details'>
            <img alt={tour.tour_name} src='https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' className='avatar extra-small green-border' />
            <div className='tour-card-title'><b>המדריך</b></div>
            <div className='tour-card-guidename'>{tour.user_first_name}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
