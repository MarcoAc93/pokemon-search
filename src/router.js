import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Main from './pages/main';
import Favorites from './pages/favorites';

const AppRouter = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
