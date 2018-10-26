import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class SwipeUpPage extends Component {
  render() {
    return (
      <div className="react-transition swipe-up">
        <Page title="Swipe Up" />
      </div>
    )
  }
}
export default SwipeUpPage
