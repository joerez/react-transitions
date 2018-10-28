import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class SwipeUpPage extends Component {
  render() {
    return (
      <div className="react-transition swipe-up">
        <Page title="Swipe Up" docs={`<div className="react-transition swipe-up"></div>`}/>
      </div>
    )
  }
}
export default SwipeUpPage
