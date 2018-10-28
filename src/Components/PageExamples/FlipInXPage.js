import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class FlipInXPage extends Component {
  render() {
    return (
      <div className="react-transition flip-in-x">
        <Page title="Flip In X" docs={`<div className="react-transition flip-in-x"></div>`}/>
      </div>
    )
  }
}
export default FlipInXPage
