// == Import npm
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// == Import
import './styles.scss';

import Header from 'src/components/Header';
import Gallery from 'src/components/Gallery';
import About from 'src/components/About';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Gallery />
      </Route>
      <Route path="/apropos" exact>
        <About />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
