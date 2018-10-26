import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class SwipeInPage extends Component {
  render() {
    return (
      <div className="react-transition fade-in">
        <Page title="Fade In" />
      </div>
    )
  }
}
export default SwipeInPage
