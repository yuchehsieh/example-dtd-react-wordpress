import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../layouts/Home';
import SingleAnnouncementPage from '../layouts/Announcement';

import path from '../utils/path';

import { StoreProvider } from '../store/reducer';
import { UIStoreProvider } from '../uiStore/reducer';

const Routes = () => {
  return (
    <UIStoreProvider>
      <StoreProvider>
        <Router>
          <Switch>
            <Route
              exact
              path={`${path.announcements}/:id`}
              component={SingleAnnouncementPage}
            />
            <Route exact path={path.home} component={HomePage} />
          </Switch>
        </Router>
      </StoreProvider>
    </UIStoreProvider>
  );
};

export default Routes;
