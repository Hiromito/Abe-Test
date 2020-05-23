import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MainLayout from './containers/MainLayout';
import HowToBet from './pages/HowToBet';

export default function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Switch>
          <Route to="/" component={ HowToBet } />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </MainLayout>
  );
}
