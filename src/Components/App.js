import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './react-transitions.css';

import Nav from './Nav'

import Front from './Front'

import Docs from './Docs/Docs';

import Home from './Home';

import SwipeUpPage from './PageExamples/SwipeUpPage'
import SwipeLeftPage from './PageExamples/SwipeLeftPage'
import SwipeRightPage from './PageExamples/SwipeRightPage'
import SwipeDownPage from './PageExamples/SwipeDownPage'

import FadeInPage from './PageExamples/FadeInPage'

import ScaleInPage from './PageExamples/ScaleInPage'
import ScaleInLeftPage from './PageExamples/ScaleInLeftPage'
import ScaleInRightPage from './PageExamples/ScaleInRightPage'

import DropInPage from './PageExamples/DropInPage'
import DropInRightPage from './PageExamples/DropInRightPage'
import DropInLeftPage from './PageExamples/DropInLeftPage'

import FlipInXPage from './PageExamples/FlipInXPage'
import FlipInXReversePage from './PageExamples/FlipInXReversePage'

import FlipInYPage from './PageExamples/FlipInYPage'
import FlipInYReversePage from './PageExamples/FlipInYReversePage'

import RotateInPage from './PageExamples/RotateInPage'
import RotateInReversePage from './PageExamples/RotateInReversePage'

import WoahPage from './PageExamples/WoahPage'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="transition-container">
            <Nav />

            <Route exact path="/projects/react-transitions/" component={Front} />

            <Route exact path="/" component={Home} />

            <Route exact path="/documentation" component={Docs} />

            <Route exact path="/swipe-up" component={SwipeUpPage} />
            <Route exact path="/swipe-left" component={SwipeLeftPage} />
            <Route exact path="/swipe-right" component={SwipeRightPage} />
            <Route exact path="/swipe-down" component={SwipeDownPage} />

            <Route exact path="/fade-in" component={FadeInPage} />

            <Route exact path="/scale-in" component={ScaleInPage} />
            <Route exact path="/scale-in-left" component={ScaleInLeftPage} />
            <Route exact path="/scale-in-right" component={ScaleInRightPage} />

            <Route exact path="/drop-in" component={DropInPage} />
            <Route exact path="/drop-in-right" component={DropInRightPage} />
            <Route exact path="/drop-in-left" component={DropInLeftPage} />

            <Route exact path="/flip-in-x" component={FlipInXPage} />
            <Route exact path="/flip-in-x-reverse" component={FlipInXReversePage} />

            <Route exact path="/flip-in-y" component={FlipInYPage} />
            <Route exact path="/flip-in-y-reverse" component={FlipInYReversePage} />

            <Route exact path="/rotate-in" component={RotateInPage} />
            <Route exact path="/rotate-in-reverse" component={RotateInReversePage} />

            <Route exact path="/woah" component={WoahPage} />

          </div>
        </BrowserRouter>
    );
  }
}

export default App;
