import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import './Tour.css';
import PhotosCarousel from '../../components/PhotosCarousel';
import Topbar from '../../layout/Topbar';
import TourStatsBar from './components/TourStatsBar';
import BookingSection from './components/BookingSection';
import TourDescription from './components/TourDescription';
import ReviewsSection from './components/ReviewsSection';
import Spinner from '../../components/Spinner';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openPopup, addTour, fetchTour } from '../../actions';
import useWindowSize from '../../hooks/useWindowSize';

export default function Tour() {
  let history = useHistory();
  const size = useWindowSize();
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState(null);
  const { id } = useParams()
  const { tour, reviews } = useSelector(state => state.tour);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();


  const fetchData = async () => {
    setIsLoading(true);
    dispatch(fetchTour(id));
    setPhotos([
      'https://res.cloudinary.com/demo/image/fetch/https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png',
      'https://res.cloudinary.com/demo/image/fetch/https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png',
      'https://res.cloudinary.com/demo/image/fetch/https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png'
    ])
    setIsLoading(false);
  }


  const handleBook = () => {
    if (!auth.isAuth) {
      dispatch(openPopup({ popupType: 'LOGIN_POPUP' }))
    } else {
      dispatch(openPopup({ popupType: 'BOOKING_POPUP' }));
      dispatch(addTour(tour));
    }
  }

  useEffect(() => { fetchData() }, [])

  return (
    <Fragment>
      {isLoading && <Spinner />}
      {(tour && photos) &&
        <Fragment>
          <Topbar left='back' />
          <div className='container'>
            <div className='tour-photos-container'>
              {size.width >= 768 && <button id='leave-page-button' className='round-button' onClick={() => history.goBack()}><i className="fas fa-chevron-left"></i></button>}
              <PhotosCarousel photos={photos} />
            </div>
            <div className='tour-page-header'>
              <div className='tour-name-and-subtitle'>
                <h1>{tour.tour_name}</h1>
                <p className='subtitle'>{tour.area_heb}</p>
              </div>
              <div className='overlapping-avatar' style={{ textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className='avatar small' alt={'moshe'} />
                <h2>{tour.user_first_name}</h2>
              </div>
            </div>
            <BookingSection tour={tour} handleBook={handleBook} />
            <TourStatsBar stats={{ price: tour.price, duration: tour.duration_hours, difficulty: tour.difficulty_heb, type: tour.tour_type_heb }} />
            <TourDescription description={tour.tour_desc} />
            <ReviewsSection reviews={reviews} />
          </div>
        </Fragment>
      }
    </Fragment>
  )
}
