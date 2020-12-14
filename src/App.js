import { Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import './App.css';

import Layout from './hoc/Layout/Layout';
import Showcase from './containers/Showcase/Showcase';
import Movie from './containers/MovieDetails/MovieDetails';

function App() {
  const routes = (
    <Switch>
      <Route path="/tv/:id">
        <Movie type="tv" />
      </Route>
      <Route path="/movie/:id">
        <Movie type="movie" />
      </Route>
      <Route path="/" exact>
        <Showcase />
      </Route>
    </Switch>
  );

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
  );
}

export default App;
