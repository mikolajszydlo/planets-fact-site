import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import MainLayout from './component/layout/MainLayout/MainLayout';
import Planet from './component/views/Planet/Planet';

const App = () => (
  <div className = "App">
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/'>
            <Redirect to = '/Mercury' />
          </Route>
          <Route exact path='/:planetId' component={Planet} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </div>
);

export default App;
