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

const App = () => {
  const totalImg = imagesData.length;
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Gallery images={imagesData} />
        </Route>
        <Route path="/apropos" exact>
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
