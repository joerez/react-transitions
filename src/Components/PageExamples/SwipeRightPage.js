import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class SwipeRightPage extends Component {
  render() {
    return (
      <div className="react-transition swipe-right">
        <Page title="Swipe Right" docs={`<div className="react-transition swipe-right"></div>`}/>
      </div>
    )
  }
}
export default SwipeRightPage
