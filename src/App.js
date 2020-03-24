import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Gallery from './components/Gallery';

import './App.css';
import './common.css';

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/work'>
            <Work />
          </Route>
          <Route exact path='/gallery'>
            <Gallery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
