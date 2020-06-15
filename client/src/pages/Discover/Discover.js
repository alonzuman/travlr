import React, { Fragment, useEffect, useState } from 'react';
import Topbar from '../../layout/Topbar';
import FiltersBar from './components/FiltersBar';
import Spinner from '../../components/Spinner';
import TourCard from '../../components/TourCard';
import { fetchTours } from '../../actions';
import { useDispatch, useSelector } from 'react-redux'

export default function Discover() {
  const tours = useSelector(state => state.tours.tours)
  const isLoading = useSelector(state => state.tours.isLoading)
  const dispatch = useDispatch();

  const onLoad = async () => {
    await dispatch(fetchTours());
  }

  useEffect(() => {
    onLoad()
  }, [])

  return (
    <Fragment>
      <Topbar />
      <FiltersBar />
      <div style={{ paddingTop: '144px' }} className='container'>
        {isLoading && <Spinner />
        }
        {tours && tours.map(tour => <TourCard key={tour.tour_id} tour={tour} />)}
      </div>
    </Fragment>
  )
}
