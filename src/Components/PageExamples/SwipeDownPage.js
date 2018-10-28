import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class SwipeDownPage extends Component {
  render() {
    return (
      <div className="react-transition swipe-down">
        <Page title="Swipe Down" docs={`<div className="react-transition swipe-down"></div>`}/>
      </div>
    )
  }
}
export default SwipeDownPage
