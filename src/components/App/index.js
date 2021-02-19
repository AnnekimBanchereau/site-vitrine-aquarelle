import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import imagesData from 'src/data/img';
import './styles.scss';

import Header from 'src/components/Header';
import Gallery from 'src/components/Gallery';
import About from 'src/components/About';
import Footer from 'src/components/Footer';
import Notices from 'src/components/Notices';
import NotFound from 'src/components/NotFound';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Gallery images={imagesData} />
      </Route>
      <Route path="/apropos" exact>
        <About />
      </Route>
      <Route path="/mentionslegales" exact>
        <Notices />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
