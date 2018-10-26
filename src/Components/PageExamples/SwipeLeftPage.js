import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class SwipeLeftPage extends Component {
  render() {
    return (
      <div className="react-transition swipe-left">
        <Page title="Swipe Left" />
      </div>
    )
  }
}
export default SwipeLeftPage
