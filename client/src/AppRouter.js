import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Navbar, { DesktopNavbar } from './layout/Navbar';
import User from './pages/User/User';
import Discover from './pages/Discover/Discover';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Tour from './pages/Tour/Tour';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';

// Layout
import Alert from './layout/Alert';
import Popup from './layout/Popup';

// Custom hooks
import useWindowSize from './hooks/useWindowSize';

// Redux
import { validateLogin, checkLanguage } from './actions';
import { useDispatch, useSelector } from 'react-redux';

export default function AppRouter() {
  const size = useWindowSize();
  const auth = useSelector(state => state.auth)
  const alert = useSelector(state => state.alert);
  const popup = useSelector(state => state.popup);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(validateLogin()) }, [])
  useEffect(() => { dispatch(checkLanguage()) }, [])

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Discover} />
        <Route path='/dashboard'>
          {auth.isAuth ? <Dashboard /> : <Redirect to='/login' />}
        </Route>
        <Route path='/login'>
          {!auth.isAuth ? <LoginPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/register'>
          {!auth.isAuth ? <RegisterPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/settings' component={Settings} />
        <Route path='/tours/:id' component={Tour} />
        <Route path='/users/:id' component={User} />
      </Switch>
      {popup.open && <Popup />}
      {alert && <Alert />}
      {size.width >= 768 ? <DesktopNavbar /> : <Navbar />}
    </Router>
  )
}
