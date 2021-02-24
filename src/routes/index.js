import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../layouts/Home';
import SingleAnnouncementPage from '../layouts/Announcement';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/announcements/:id"
          component={SingleAnnouncementPage}
        />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
