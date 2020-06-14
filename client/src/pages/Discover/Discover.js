import React, { Fragment, useEffect, useState } from 'react';
import Topbar from '../../layout/Topbar';
import Spinner from '../../components/Spinner';
import TourCard from '../../components/TourCard';
import { fetchTours } from '../../actions';
import { useDispatch, useSelector } from 'react-redux'

export default function Discover() {
  const tours = useSelector(state => state.tours.tours)
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onLoad = async () => {
    setIsLoading(true);
    await dispatch(fetchTours());
    setIsLoading(false);
  }

  useEffect(() => {
    onLoad()
  }, [])

  return (
    <Fragment>
      <Topbar />
      <div className='container'>
        {isLoading && <Spinner />}
        {tours && tours.map(tour => <TourCard key={tour.tour_id} tour={tour} />)}
      </div>
    </Fragment>
  )
}
