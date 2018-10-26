import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './react-transitions.css';

import Home from './Home';
import SwipeUpPage from './PageExamples/SwipeUpPage'
import SwipeLeftPage from './PageExamples/SwipeLeftPage'
import SwipeRightPage from './PageExamples/SwipeRightPage'
import SwipeDownPage from './PageExamples/SwipeDownPage'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/swipe-up" component={SwipeUpPage} />
            <Route exact path="/swipe-left" component={SwipeLeftPage} />
            <Route exact path="/swipe-right" component={SwipeRightPage} />
            <Route exact path="/swipe-down" component={SwipeDownPage} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
