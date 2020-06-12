import React, { Fragment } from 'react'
import './CarouselPhoto.css';

export default function CarouselPhoto({ photo, setIsOpen }) {

  return (
    <Fragment>
      <img className='carousel-photo' src={photo} alt={photo} />
    </Fragment>
  )
}
