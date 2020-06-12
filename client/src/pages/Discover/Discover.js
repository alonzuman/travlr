import React, { Fragment, useEffect, useState } from 'react';
import Topbar from '../../layout/Topbar';
import Spinner from '../../components/Spinner';
import TourCard from '../../components/TourCard';
import axios from 'axios';

export default function Discover() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTours = async () => {
    setIsLoading(true);
    const res = await axios.get('/tours')
    console.log(res.data)
    setIsLoading(false);
    setTours(res.data);
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <Fragment>
      <Topbar />
      <div className='container'>
        {isLoading && <Spinner />}
        {tours &&
          tours.map(tour => <TourCard key={tour.tour_id} tour={tour} />)
        }
      </div>
    </Fragment>
  )
}
