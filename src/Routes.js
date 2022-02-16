import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Spinner from './atoms/Spinner';

export default function Routes() {
  const loader = useSelector((state) => state.commons.loader);

  return (
    <>
      <Spinner show={loader} />
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
