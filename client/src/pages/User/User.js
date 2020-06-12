import React, { useState, useEffect, Fragment } from 'react';
import Topbar from '../../layout/Topbar';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import './User.css'
import { useParams } from 'react-router-dom';

export default function User() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { id } = useParams()
  const fetchData = async () => {
    setIsLoading(true);
    const res = await axios.get(`/api/v1/users/${id}`);
    setIsLoading(false);
    // console.log(res.data);
    setUser(res.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Fragment>
      <Topbar center={user.user_first_name} />
      <div className='container'>
        {isLoading && <Spinner />}
        {user &&
          <div className='user-info'>
            <h1>{user.user_first_name}</h1>
          </div>}
      </div>
    </Fragment>
  )
}
