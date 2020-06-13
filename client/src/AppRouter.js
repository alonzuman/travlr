import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages & Components
import Navbar, { DesktopNavbar } from './layout/Navbar';
import User from './pages/User/User';
import Discover from './pages/Discover/Discover';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Tour from './pages/Tour/Tour';
import Alert from './layout/Alert';
import Popup from './layout/Popup';

// Custom hooks
import useWindowSize from './hooks/useWindowSize';

// Redux
import { validateLogin } from './actions';
import { useDispatch, useSelector } from 'react-redux';

export default function AppRouter() {
  const size = useWindowSize();
  const alert = useSelector(state => state.alert);
  const popup = useSelector(state => state.popup);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(validateLogin()) }, [])

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Discover} />
        <Route path='/dashboard' component={Dashboard} />
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
