import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import User from './pages/User/User';
import Discover from './pages/Discover/Discover';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Tour from './pages/Tour/Tour';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Discover} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/settings' component={Settings} />
          <Route path='/tours/:id' component={Tour} />
          <Route path='/users/:id' component={User} />
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
