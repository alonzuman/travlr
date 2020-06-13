import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Pages & Components
import Navbar from './layout/Navbar';
import User from './pages/User/User';
import Discover from './pages/Discover/Discover';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Tour from './pages/Tour/Tour';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Book from './pages/Book/Book';
import Alert from './layout/Alert';
import Popup from './layout/Popup';

// Redux
import { validateLogin } from './actions';
import { useDispatch, useSelector } from 'react-redux';

export default function AppRouter() {
  const auth = useSelector(state => state.auth);
  const alert = useSelector(state => state.alert);
  const popup = useSelector(state => state.popup);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(validateLogin()) }, [])

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Discover} />
        <Route path='/dashboard'>
          {auth.isAuth ? <Dashboard /> : <Redirect to='/login' />}
        </Route>
        <Route path='/login'>
          {auth.isAuth ? <Redirect to='/' /> : <Login />}
        </Route>
        <Route path='/tours/:id/book'>
          {auth.isAuth ? <Book /> : <Redirect to='/login' />}
        </Route>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/register' component={Register} />
        <Route path='/settings' component={Settings} />
        <Route path='/tours/:id' component={Tour} />
        <Route path='/users/:id' component={User} />
      </Switch>
      {popup.open && <Popup />}
      {alert && <Alert />}
      <Navbar />
    </Router>
  )
}
